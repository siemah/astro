import globalLinks from "../../../../config/links";
import httpRequest from "../../../http";

/**
 * Fetch newest products
 * 
 * @param per_page number of product to retrieve
 * @returns list of products
 */
export default async function getNewArrivals(per_page = 3) {
  const response = await httpRequest({
    url: `${globalLinks.products}?per_page=${per_page}&order=desc&orderby=date`
  });

  return response || [];
}