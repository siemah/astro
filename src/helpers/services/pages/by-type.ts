import { getStorePages } from ".";
import globalLinks from "../../../config/links";

/**
 * Find page by its type
 * 
 * @param type page type such as home, terms..
 * @returns 
 */
export default async function getStorePageByType(type: "home" | "terms" | string) {
  const { pages: storePagesData } = await getStorePages(globalLinks.pages);
  const pageData = storePagesData?.find((page) => page.page_type === type);

  return pageData;
}