import getProducts from "..";
import getAllProducts from "../all";

/**
 * Fetch trending products
 * 
 * @returns list of popular(trending) products
 */
export default async function getTrendingProducts(search: Record<string, string> = {}) {
  const allProducts = await getAllProducts();
  const include = allProducts?.map(product => product?.id);
  const products = await getProducts({
    orderby: "popularity",
    per_page: "8",
    include: include as any,
    consumer_key: import.meta.env.WC_API_DEPLOY_CONSUMER_KEY,
    consumer_secret: import.meta.env.WC_API_DEPLOY_CONSUMER_SECRET,
    ...search
  });

  return products;
}