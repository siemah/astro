import getProducts from "..";

/**
 * Retrive similar product(belongin to same category)
 * 
 * @param category category id
 * @returns list of products belonging to the same category
 */
export default async function getSimilarProductsByCategories(category: string, per_page = "4") {
  if (!!category === false) return [];

  const products = await getProducts({
    category,
    per_page,
    consumer_key: import.meta.env.WC_API_DEPLOY_CONSUMER_KEY,
    consumer_secret: import.meta.env.WC_API_DEPLOY_CONSUMER_SECRET,
  });

  return products;
}