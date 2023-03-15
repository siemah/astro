import globalLinks from "../../../../config/links";
import httpRequest from "../../../http";

/**
 * Fetch category details
 * 
 * @returns category details
 */
export default async function getCategoryBySlug(slug: string): Promise<Record<string, string>> {
  const search = new URLSearchParams({
    slug,
    consumer_key: import.meta.env.WC_API_DEPLOY_CONSUMER_KEY,
    consumer_secret: import.meta.env.WC_API_DEPLOY_CONSUMER_SECRET,
  });
  const [category] = await httpRequest({
    url: `${globalLinks.apiCategories}?${search}`
  });

  return category;
}