import globalLinks from "../../../../config/links";
import httpRequest from "../../../http";

/**
 * Fetch store products
 * 
 * @returns list of store products
 */
export default async function getCategories(): Promise<Record<string, string>[]> {
  const params = new URLSearchParams({
    consumer_key: globalLinks.consumerKey,
    consumer_secret: globalLinks.consumerSecret
  });
  const categories = await httpRequest({
    url: `${globalLinks.productsCategories}?${params}`
  });

  return categories;
}