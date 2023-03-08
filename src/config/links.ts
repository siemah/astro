const env = import.meta.env;
const globalLinks = {
  pages: `https://${env.WC_API_DEPLOY_URL}/wp-json/zzenz/v1/store/${env.VENDOR_ID}/pages?type=all`,
  website: `https://${env.WC_API_DEPLOY_URL}/wp-json/zzenz/v1/store/${env.VENDOR_ID}/website`,
  shipping: `https://${env.WC_API_DEPLOY_URL}/wp-json/zzenz/v1/store/${env.VENDOR_ID}/shipping/list`,
};
export default globalLinks;