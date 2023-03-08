import globalLinks from "../../../../config/links";
import httpRequest from "../../../http";

/**
 * Fetch store products
 * 
 * @returns list of store products
 */
export default async function getCategories(): Promise<Record<string, string>[]> {
  const { data: categories = [] } = await httpRequest({
    url: globalLinks.productsCategories
  });

  return categories;
}