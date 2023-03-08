import globalLinks from "../../../config/links";
import httpRequest from "../../http";

/**
 * Fetch store products
 * 
 * @returns list of store products
 */
export default async function getProducts() {
  const products = await httpRequest({
    url: globalLinks.products
  });

  return products;
}