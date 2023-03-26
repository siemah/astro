import { computeOrderTotal } from "../../cart";
import httpRequest from "../../http";
import CartStorage from "../../storage";

/**
 * Fetch shipping location details and render them to the target element
 * 
 * @param $shippingLocation element where to insert shipping location option element
 */
export async function fetchAndRenderShippingLocation($shippingLocation: Element) {
  const store_shipping = document
    .querySelector("[name='store_shipping']")
    ?.getAttribute("content");
  const response = await httpRequest({
    url: store_shipping,
  });
  const shippingLocations = response?.data || [];

  if (response.code === "success") {
    let shippingLocationUI =
      "<option disabled='' value='' selected>Wilaya</option>";
    shippingLocations.forEach((item: Record<string, any>) => {
      shippingLocationUI += `<option value="${item?.location?.code}">${item?.location?.name}</option>`;
    });
    $shippingLocation.innerHTML = shippingLocationUI;
    const cart = new CartStorage();
    const [shippingLine] = await cart.getShippingLines();
    document.querySelector(".js-shipping__total").textContent = `${shippingLine.total || 0}`;
    // set a default value for shipping location
    if (!!shippingLine && !!shippingLine?.id) {
      // @ts-ignore
      $shippingLocation.value = shippingLine.id;
    }
  }

  $shippingLocation.addEventListener("change", async (event) => {
    // @ts-ignore
    const { value } = event.target;
    const selectedShippind = shippingLocations.find(
      ({ location }) => location.code === value
    );

    if (selectedShippind !== undefined) {
      const $shippingMode = document.querySelector(
        "[name=shipping-mode]:checked"
      );
      // @ts-ignore
      const selectedShippingMode = $shippingMode?.value || "door";
      const shippingTotal =
        selectedShippingMode === "door"
          ? selectedShippind?.cost
          : selectedShippind?.["stop-desk-cost"] || selectedShippind?.cost || 0;
      const cart = new CartStorage();
      const shippingLine = {
        method_id: "flat_rate",
        id: selectedShippind?.location?.code,
        method_title: selectedShippind?.name,
        total: shippingTotal,
      };
      await cart.updateShippingLine(shippingLine);
      const $shippingTotal = document.querySelector(".js-shipping__total");
      $shippingTotal.textContent = shippingTotal;
      const $total = document.querySelector(".js-line-items-total");
      $total.textContent = `${await computeOrderTotal()}`;
    }
  });
}