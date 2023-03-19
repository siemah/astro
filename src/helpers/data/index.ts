/**
 * Strip html tags/attributes from a given string
 * @param str html string content
 * @returns stripped html content
 */
export function stripHTML(str: string) {
  const strippedHtml = str.replace(/<\/?[^>]+(>|$)/g, "");
  return strippedHtml;
}

/**
 * Extract store key from shipping url
 * 
 * @param shippingUrl store shipping url
 * @returns store key
 */
export function extractStoreKeyFromShippingUrl(shippingUrl: string) {
  const storeKeyIndex = shippingUrl.lastIndexOf("/") + 1;
  let storeKey = shippingUrl.substring(storeKeyIndex);
  storeKey = storeKey.replace(/\//g, "");

  return storeKey;
}