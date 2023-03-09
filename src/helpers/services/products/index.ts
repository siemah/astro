import globalLinks from "../../../config/links";
import httpRequest from "../../http";

/**
 * Fetch store products
 * 
 * @returns list of store products
 */
export default async function getProducts(searchParams?: string | string[][] | Record<string, string> | URLSearchParams) {
  const search = new URLSearchParams(searchParams);
  const endpoint = !!searchParams
    ? `${globalLinks.apiProducts}?${search}`
    : globalLinks.products;

  const products = await httpRequest({
    url: endpoint
  });

  return products;
}