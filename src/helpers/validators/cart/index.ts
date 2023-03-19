import { AttributesPropsTypes } from "../../analytics/facebook-pixel/types";
import { LineItemType, MetaDataType } from "../../cart/types";
import { isNumber } from "../shared";

/**
 * Validate product details added to shopping cart
 * @param line_item product details added to shopping cart
 * @param productAttributes product attributes to be validate agains product details added to shopping cart
 * @returns 
 */
export function validateOrderLineItem(line_item: Partial<LineItemType>, productAttributes: AttributesPropsTypes[]) {
  let errors: Record<string, string> | boolean = false;

  if (
    isNumber(line_item?.quantity) === false ||
    (line_item?.quantity && line_item?.quantity <= 0)
  ) {
    errors = {
      quantity: "Veuillez saisir une quantité valide"
    };
  }

  if (isNumber(line_item.product_id) === false) {
    errors = {
      ...errors,
      global: "Actualisez votre navigateur puis réessayez!"
    };
  }

  const attributeError = validateAttributesAddedToOrder(line_item?.meta_data, productAttributes);
  errors = attributeError === false
    ? errors
    : errors === false
      ? attributeError
      : { ...attributeError, ...errors };

  return errors;
}

/**
 * Validate attributes selected by customer
 * @param selectedAttributes attributes of the product selected by customer
 * @param productAttributes product attributes
 * @returns 
 */
export function validateAttributesAddedToOrder(selectedAttributes: MetaDataType[] | undefined, productAttributes: AttributesPropsTypes[]) {
  let error: Record<string, string> | boolean = false;
  productAttributes = productAttributes.filter(attr => attr.visible === true);

  if (productAttributes.length > 0) {
    if (selectedAttributes?.length === 0) {
      error = {
        options: "Les options sont requises"
      };
    } else {
      selectedAttributes?.forEach(({ key, value }) => {
        const attribute = productAttributes.find(attribute => (
          attribute.name === key &&
          attribute.visible === true &&
          attribute?.options?.includes(value)
        ));
        if (attribute === undefined) {
          error = {
            options: "Les options sont requises au moins en ajouter une"
          };
        }
      });
    }
  }

  return error;
}