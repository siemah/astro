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