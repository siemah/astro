import globalLinks from "../../../../config/links";
import httpRequest from "../../../http";

interface ParamsType {
  per_page: number;
  page: number;
}
/**
 * Fetch products by page and number of product(per_page)
 * 
 * @returns list of store products
 */
export default async function getAllProducts() {
  const products = [];
  const per_page = 24;
  let isNotDone = true;

  for (let page = 1; isNotDone; page++) {
    const search = new URLSearchParams({
      per_page: `${per_page}`,
      page: `${page}`
    });
    const endpoint = `${globalLinks.products}?${search}`
    const productsPerPage = await httpRequest({
      url: endpoint
    });
    products.push(...productsPerPage);

    if (productsPerPage?.length === 0 || productsPerPage?.length < per_page) {
      isNotDone = false;
    }
  }

  return products;
}