/**
 * Scroll to the given element
 * @param element the element we want to scroll to
 */
export function scrollIntoView(element: HTMLElement | null, extraOffset = 0) {
  if (typeof window !== "undefined") {
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = element?.getBoundingClientRect();
    const offset = (elemRect?.top || 0) - bodyRect.top;

    window.scrollTo({
      left: 0,
      top: offset + extraOffset,
      behavior: "smooth"
    });
  }
}