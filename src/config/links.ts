const env = import.meta.env;
const consumerKey = env.WC_API_DEPLOY_CONSUMER_KEY;
const consumerSecret = env.WC_API_DEPLOY_CONSUMER_SECRET;
const globalLinks = {
  consumerKey,
  consumerSecret,
  pages: `https://${env.WC_API_DEPLOY_URL}/wp-json/zzenz/v1/pages?type=all`,
  website: `https://${env.WC_API_DEPLOY_URL}/wp-json/zzenz/v1/website`,
  shipping: `https://${env.WC_API_DEPLOY_URL}/wp-json/zzenz/v1/shipping/list`,
  products: `https://${env.WC_API_DEPLOY_URL}/wp-json/wc/v3/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`,
  apiProducts: `https://${env.WC_API_DEPLOY_URL}/wp-json/wc/v3/products`,
  productsCategories: `https://${env.WC_API_DEPLOY_URL}/wp-json/wc/v3/products/categories`,
  apiCategories: `https://${env.WC_API_DEPLOY_URL}/wp-json/wc/v3/products/categories`,
  page: `https://${env.WC_API_DEPLOY_URL}/wp-json/wp/v2/pages`,
};
export default globalLinks;