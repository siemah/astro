import { addToCart, customEvent } from "../analytics/facebook-pixel";
import { constructCartDataByProduct } from "../cart";
import { objectifyFormData } from ".";
import { validateOrderLineItem } from "../validators/cart";
import { scrollIntoView } from "../ui";
import httpRequest from "../http";
import CartStorage from "../storage";
import { LineItemType } from "../cart/types";
import { ProductType } from "../analytics/facebook-pixel/types";

interface AddToCartParamsTypes {
  mode: "add-to-cart" | "buy-now";
  facebookPixelId?: string | null;
  product: ProductType;
  product_stock_url: string;
  storeKey: string;
}

/**
 * hide all elements with errors such as form field with errors
 * who contains invalid-feedback class
 */
const hideAllElementsWithError = () => {
  const $errorsElements = document.querySelectorAll(".invalid-feedback");
  $errorsElements.forEach($element => {
    $element.classList.remove("d-block");
    $element.classList.add("d-none");
  });
}

/**
 * Update errors content by showing all fields with errors
 * 
 * @param errors object of errors
 */
const cleanAndShowErrors = (errors: Record<string, string>) => {
  let errorElement = null;

  hideAllElementsWithError();
  Object.keys(errors).forEach(error => {
    const $elm = document.querySelector(`.js-${error}`);
    $elm?.classList?.remove("d-none");
    $elm?.classList?.add("d-block");
    if (!!$elm) {
      $elm.textContent = errors[error];
    }
    errorElement = errorElement ?? $elm;
  });
  // scroll to the element with error message
  if (!errors?.global && !!errorElement) {
    scrollIntoView(errorElement, -150);
  }
}

/**
 * Notify customer about a new product added to card
 * 
 * @param message notification message
 */
const showAddToCartNotification = (message: string, numberOfItems: number) => {
  const $cartItems = document.querySelector(".js-cart-items");
  const $alert = document.querySelector(".js-alert");
  $alert.classList.remove("d-none");
  $alert.textContent = message;
  $cartItems.textContent = `${numberOfItems}`;
  hideAllElementsWithError();
  scrollIntoView($alert as HTMLElement, -150);
}

/**
 * Add product to cart
 * 
 * @param config add to cart configuration such as mode, product, store key..
 */
const onAddToCart = (config: AddToCartParamsTypes) => async (event: SubmitEvent) => {
  event.preventDefault();
  const { mode, facebookPixelId, product, product_stock_url, storeKey } = config;
  !!facebookPixelId && customEvent("StartAddToCart", {
    content_name: product.name,
    price: product?.price,
    regular_price: product?.regular_price,
    contents: [{ id: product.id, quantity: 1, product_build_id: product.id }],
    timestamp: Date.now()
  });
  // form data
  const form = mode === "add-to-cart"
    ? event.currentTarget
    : document.querySelector(".js-form");
  const formData = new FormData(form as any);
  const orderData = objectifyFormData(formData);
  const lineItem = constructCartDataByProduct(orderData);
  const errors = validateOrderLineItem(lineItem, product?.attributes);

  if (errors !== false) {
    cleanAndShowErrors(errors);
    !!facebookPixelId && customEvent("ValidationErrorInAddToCart", {
      contents: errors
    });
    return false;
  }
  // verify product stock availability
  const response = await httpRequest({
    url: `${product_stock_url}/${orderData.product_id}/availability?quantity=${orderData.quantity}`,
    requestConfig: {
      method: "GET",
    }
  });

  if (response?.code !== "success") {
    // render errors and scroll to the 1st field with error
    cleanAndShowErrors({
      ...(response?.errors || {}),
      quantity: response?.errors?.global,
    });
    !!facebookPixelId && customEvent("ServerErrorInAddToCart", {
      contents: response.errors
    });
    !!facebookPixelId && customEvent("ProductStockCheck", {
      status: "outofstock"
    });
    return;
  } else {
    const cart = new CartStorage();
    const productDetails = {
      id: String(product.id),
      slug: product.slug,
      name: product.name,
      regular_price: product.price || product.regular_price,
      thumbnail: product.thumbnail,
    }
    await Promise.all([
      cart.addItem(lineItem as LineItemType),
      cart.pushItemDetails(productDetails)
    ]);
    const items = await cart.getAllItems();
    mode === "add-to-cart" && showAddToCartNotification("Ajouter au panier avec succes", items?.length);
    !!facebookPixelId && customEvent("ProductStockCheck", {
      status: "instock"
    });
  }
  // send pixel event
  !!facebookPixelId && await addToCart(product, lineItem?.quantity || 1, {
    pixelId: facebookPixelId,
    storeKey,
    sourceUrl: window.location.href
  });
  // navigate to checkout if a customer presson "buy now" button
  if (mode === "buy-now") {
    !!facebookPixelId && customEvent("StartNavigatingToCheckout", {
      timestamp: Date.now()
    });
    window.location.replace("/cart/checkout");
  }
}

export default onAddToCart;