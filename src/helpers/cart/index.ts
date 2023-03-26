import CartStorage from "../storage";
import { ConstructCartDataByProductOptionsType, LineItemType, MetaDataType } from "./types";

/**
 * Construct order of the given product
 * @param orderData order details gotten from customer selecting product option, quantity..
 * @returns order details of this product
 */
export function constructCartDataByProduct<T extends ConstructCartDataByProductOptionsType>(orderData: T): Partial<LineItemType> {
  const { options, ...rest } = orderData;
  let meta_data: MetaDataType[] = [];

  for (const key in options) {
    const value = options[key];
    meta_data.push({
      key,
      value
    });
  }

  return {
    ...rest,
    meta_data
  };
}

/**
 * Compute order total
 * 
 * @returns total of the items in the cart
 */
export async function computeOrderTotal() {
  const cart = new CartStorage();
  const [shippingItem] = await cart.getShippingLines();
  const items = await cart.getAllItems();
  const products = await cart.getItemsDetails();
  let total = parseInt(shippingItem?.total || "0", 10);

  if (Array.isArray(items)) {
    items?.forEach(item => {
      const productPrice = parseInt(products[item.product_id].regular_price, 10);
      total += parseInt(item.quantity, 10) * productPrice;
    });
  }

  return total;
}