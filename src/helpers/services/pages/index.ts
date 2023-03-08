import httpRequest from "../../http";

/**
 * Get store pages details
 * @param endpointUrl url to the server where the data will get from
 * @returns array of store pages if there is any
 */
export async function getStorePages(endpointUrl: string) {
  let results = {
    pages: []
  };
  try {
    const response = await httpRequest({
      url: endpointUrl
    });
    if (response?.status === 200 && response?.code === "success") {
      results.pages = response?.data;
    }
  } catch (error) {
    console.log(`[astro-source-zzenz -error-]`, error);
  }

  return results;
}