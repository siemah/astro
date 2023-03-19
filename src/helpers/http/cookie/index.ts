/**
 * Generate fbclid(fb click id)
 * 
 * @returns generated fb click id or null
 */
function generateMetaFBCFromUrl() {
  const fbClckId = (new URL(window.location.href)).searchParams.get("fbclid");
  const fbc = fbClckId !== null ? `fb.1.${Date.now()}.${fbClckId}` : fbClckId;

  return fbc;
}

/**
 * Extract fbc(facebook click id) & fbp(facebook browser id)
 * 
 * @returns object contains fbc & fbp
 */
export function extractMetaPixelDetails() {
  let fbc: string | null = null;
  let fbp: string | null = null;

  window.document.cookie
    .split("; ")
    .forEach(cookie => {
      const [name, value] = cookie.split("=");
      if ("_fbc" === name) {
        fbc = value;
      } else if (name === "_fbp") {
        fbp = value;
      }
    });

  if (fbc === null) {
    fbc = generateMetaFBCFromUrl();
  }

  return {
    fbc,
    fbp
  };
}