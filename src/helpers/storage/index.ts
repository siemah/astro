import { ProductType } from "../analytics/facebook-pixel/types";
import { LineItemType, ShippingLineType } from "../cart/types";

const CART_NAME = "zz-cart";
const CART_SHIPPING_LINES = "zz-cart-shipping-lines";
const CART_PRODUCT_DETAILS = "zz-cart-products-details";

export default class CartStorage {

  /**
   * Add product 2cart(shopping cart)
   * @param lineItem new product details added to cart
   * @returns promise resolved 2true if line item added or rejected with error
   */
  addItem(lineItem: LineItemType) {
    return new Promise(function (resolve) {
      const cart = localStorage.getItem(CART_NAME);
      try {
        if (cart === null || cart === "") {
          localStorage.setItem(CART_NAME, JSON.stringify([lineItem]));
          resolve(true);
        } else {
          let cartData: LineItemType[] = JSON.parse(cart);
          let existingProductIndex = cartData.findIndex(({ product_id, meta_data }) => (
            product_id === lineItem.product_id &&
            JSON.stringify(meta_data) === JSON.stringify(lineItem.meta_data)
          ));
          // check if the product with same options are already in cart 
          // then update the quntity only
          if (existingProductIndex === -1) {
            cartData.push(lineItem);
          } else {
            cartData[existingProductIndex] = {
              ...cartData[existingProductIndex],
              quantity: Number(cartData[existingProductIndex].quantity) + Number(lineItem.quantity)
            };
          }
          localStorage.setItem(CART_NAME, JSON.stringify(cartData));

          resolve(true);
        }
      } catch (error) {
        resolve(false);
      }
    });
  }

  /**
   * Get all items inside customer cart
   * @returns list of cart items
   */
  getAllItems(): Promise<string | any[]> {
    return new Promise(function (resolve, reject) {
      let cart: string | [] | null = localStorage.getItem(CART_NAME);

      if (cart !== null && cart !== "") {
        cart = JSON.parse(String(cart));
      } else {
        cart = [];
      }

      resolve(cart);
    });
  }

  /**
   * Push product to cart details
   * @param product product details
   * @returns true if added otherwise false
   */
  pushItemDetails(product: Pick<ProductType, "id" | "name" | "slug" | "thumbnail" | "regular_price">) {
    return new Promise(function (resolve) {
      try {
        let cartProductsDetails = localStorage.getItem(CART_PRODUCT_DETAILS);
        let newProductsDetails;

        if (cartProductsDetails !== null && cartProductsDetails !== "") {
          const products: Record<string, Partial<ProductType>> = JSON.parse(cartProductsDetails);

          if (products.hasOwnProperty(product.id) === false) {
            newProductsDetails = JSON.stringify({
              ...products,
              [product.id]: product
            });
          } else {
            newProductsDetails = JSON.stringify(products);
          }
        } else {
          newProductsDetails = JSON.stringify({
            [product.id]: product
          });
        }

        localStorage.setItem(CART_PRODUCT_DETAILS, newProductsDetails);
        resolve(true);
      } catch (error) {
        resolve(false);
      }
    });
  }

  /**
   * Get products details of the customer cart
   * @returns list of product details inside the shopping cart(aka cart)
   */
  getItemsDetails() {
    return new Promise(function (resolve) {
      let cartProductsDetails: string | null | {} = localStorage.getItem(CART_PRODUCT_DETAILS);

      if (cartProductsDetails !== null && cartProductsDetails !== "") {
        cartProductsDetails = JSON.parse(cartProductsDetails as string);
      } else {
        cartProductsDetails = {};
      }

      resolve(cartProductsDetails);
    });
  }

  /**
   * Remove one item from cart by its index
   * @param itemIndex item index
   * @returns the new line items data after removing the targeted item
   */
  removeItemByIndex(itemIndex: number) {
    return new Promise(function (resolve) {
      let _resolve;

      try {
        const cartContent = localStorage.getItem(CART_NAME);
        if (cartContent !== null && cartContent !== "") {
          const cartData: LineItemType[] = JSON.parse(cartContent);
          const filtredCart = cartData.filter((_, index) => index !== itemIndex);
          localStorage.setItem(CART_NAME, JSON.stringify(filtredCart));
          _resolve = filtredCart;
        } else {
          _resolve = null;
        }
      } catch (error) {
        _resolve = null;
      }

      resolve(_resolve);
    });
  }

  /**
   * Update line item quantity
   * @param index index of line item in cart content
   * @param quantity new quantity of that item
   * @returns new line items after updating the targeted item
   */
  updateItemQuantityByIndex(index: number, quantity: number) {
    const _self = this;
    return new Promise(function (resolve) {
      let _resolve;

      try {
        const cartContent = localStorage.getItem(CART_NAME);

        if (cartContent !== null && cartContent !== "") {
          const lineItems: LineItemType[] = JSON.parse(cartContent);

          if (quantity === 0) {
            _resolve = _self.removeItemByIndex(index);
          } else {
            lineItems[index] = {
              ...lineItems[index],
              quantity
            };
            localStorage.setItem(CART_NAME, JSON.stringify(lineItems));
            _resolve = lineItems;
          }
        } else {
          _resolve = false;
        }
      } catch (error) {
        _resolve = false;
      }

      resolve(_resolve);
    });
  }

  /**
   * Clear line items and shopping cart
   */
  clearshoppingCart() {
    localStorage.removeItem(CART_NAME);
    localStorage.removeItem(CART_PRODUCT_DETAILS);
  }

  /**
   * Retrieve shipping details
   * @returns list of shipping items selected by customer
   */
  getShippingLines() {
    return new Promise(function (resolve) {
      let cart: string | [] | null = localStorage.getItem(CART_SHIPPING_LINES);

      if (cart !== null && cart !== "") {
        cart = JSON.parse(String(cart));
      } else {
        cart = [];
      }

      resolve(cart);
    });
  }

  /**
   * Update shipping lines
   * 
   * @param newShippingLines bew shipping line details
   * @returns boolean true if updated otherwise false
   */
  updateShippingLine(newShippingLines: ShippingLineType) {
    return new Promise(function (resolve) {
      let _resolve: boolean;

      try {
        localStorage.setItem(CART_SHIPPING_LINES, JSON.stringify([newShippingLines]));
        _resolve = true;
      } catch (error) {
        // most of the time this method wont threw any error unless local storage memory consumed
        _resolve = false;
      }

      resolve(_resolve);
    });
  }

}