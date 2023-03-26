import { LineItemType } from "../../cart/types";

/**
 * Construct meta pixel content_ids
 * 
 * @param lineItems cart items contains products added to cart
 * @returns meta pixel content_ids
 */
export function constructProductsIds(lineItems: LineItemType[]) {
  let contents = [];
  let numItems = 0;

  const content_ids = lineItems.reduce((acc, item) => {
    numItems += Number(item?.quantity);
    contents.push({
      id: item?.product_id,
      quantity: item?.quantity,
    });
    return [...acc, item?.product_id];
  }, []);

  return { numItems, contents, content_ids };
}