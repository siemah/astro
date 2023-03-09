/**
 * Strip html tags/attributes from a given string
 * @param str html string content
 * @returns stripped html content
 */
export function stripHTML(str: string) {
  const strippedHtml = str.replace(/<\/?[^>]+(>|$)/g, "");
  return strippedHtml;
}