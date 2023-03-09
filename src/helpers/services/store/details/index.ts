import httpRequest from "../../../http";

/**
 * Get store pages details
 * @param endpointUrl url to the server where the data will get from
 * @returns array of store pages if there is any
 */
export async function getStoreDetails(endpointUrl: string) {
  let results = {
    data: null
  };
  try {
    const response = await httpRequest({ url: endpointUrl });
    if (response?.status === 200 && response?.code === "success") {
      results.data = response?.data;
    }
  } catch (error) {
    console.log(`[astro-source-zzenz <website details>]`, error);
  }

  return results.data;
}