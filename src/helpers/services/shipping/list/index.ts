import httpRequest from "../../../http";

/**
 * Get store shipping list
 * @param endpointUrl url to the server where the data will get from
 * @returns array of store shipping list if there is any
 */
export async function getShippingZones(endpointUrl: string) {
  let results = {
    data: null
  };
  try {
    const response = await httpRequest({ url: endpointUrl });
    if (response?.status === 200 && response?.code === "success") {
      results.data = response.data;
    }
  } catch (error) {
    console.log(`[astro-source-zzenz <website shipping>]`, error);
  }

  return results;
}