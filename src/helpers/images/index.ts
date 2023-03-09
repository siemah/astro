/**
 * Construct image url using external image processing provider
 * @param src image source(main url)
 * @returns new image url using image processing CDN 
 * to generate image with different size and format
 */
type ImageFormat = "webp" | "png" | "jpg";
type GetImageLinkConfigTypes = {
  formats: ImageFormat;
};
export function getImageLink(src: string, imageConfig?: GetImageLinkConfigTypes): string {
  const format = imageConfig?.formats ?? "webp"
  return (
    import.meta.env.NODE_ENV == "production"
      ? `https://images.weserv.nl/?url=${src}&output=${format}&q=85`
      : src
  );
}

/**
 * Retrive file extension
 * 
 * @param name file name or url
 * @returns extension of the file
 */
export function getExtension(name: string) {
  const lastIndex = name.lastIndexOf(".");
  const extension = name.substring(lastIndex + 1);

  return extension;
}

/**
 * Generate several images for product depend on the sizes
 * @param url image url
 * @param sizes sizes of the images to put in srcset attribute such as srcset="<image-url> size[0]w, .."
 * @param dimensions height and width of the generated images
 * @returns object contains srcset prop where list of image size constructed
 */
export function generateProductImageSet(url: string, sizes: string[], dimensions: Partial<Record<"height" | "width", number>>[] = []) {
  if (import.meta.env.NODE_ENV !== "production") {
    return {
      srcSet: url
    }
  }

  let srcSet = [];
  sizes.forEach((size, index) => {
    const { height, width } = dimensions[index];
    const imageSrc = `https://images.weserv.nl/?url=${url}&output=webp&h=${height || ""}&w=${width || ""}&we ${size}w`;
    srcSet.push(imageSrc);
  });
  // add a default url with webp format
  srcSet.push(getImageLink(url));

  return {
    srcSet: srcSet.join(", "),
  }
}