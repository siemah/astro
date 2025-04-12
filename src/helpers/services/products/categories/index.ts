import globalLinks from "../../../../config/links";
import httpRequest from "../../../http";

/**
 * Fetch store products
 * 
 * @returns list of store products
 */
export default async function getCategories(): Promise<Record<string, any>[]> {
  const params = new URLSearchParams({
    consumer_key: globalLinks.consumerKey,
    consumer_secret: globalLinks.consumerSecret,
    per_page: "100"
  });
  const categories = await httpRequest({
    url: `${globalLinks.productsCategories}?${params}`
  });

  return categories;
}