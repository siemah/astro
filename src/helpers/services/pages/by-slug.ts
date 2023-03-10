import globalLinks from "../../../config/links";
import httpRequest from "../../http";

/**
 * Fetch page details using wordpress api
 * 
 * @param slug page slug
 * @returns array most of the time of 1/0 page
 */
export default async function getStorePageBySlug(slug: string) {
  const [page = {}] = await httpRequest({
    url: `${globalLinks.page}?slug=${slug}`
  });

  if (page?._links["wp:featuredmedia"]?.[0]?.href) {
    const mediaDetails = await httpRequest({
      url: page?._links["wp:featuredmedia"]?.[0]?.href
    });
    page.featured_media = mediaDetails?.source_url;
  }

  return page;
}