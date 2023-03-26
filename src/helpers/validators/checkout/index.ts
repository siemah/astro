import { isEmail, isPhone } from "../shared";

/**
 * Billing validation
 * @param details biling details
 * @returns list of errors or false if there is'nt
 */
export function validateBillingDetails(details: Record<string, string>) {
  let errors: boolean | Record<string, string> = false;

  if (details?.first_name?.length < 2) {
    errors = {
      first_name: "Le prénom doit contenir au moins 2 caractères"
    }
  }

  if (details?.last_name?.length < 2) {
    errors = {
      ...(errors || {}),
      last_name: "Le nom de famille doit contenir au moins 2 caractères"
    };
  }

  if (details?.email?.length > 0 && isEmail(details?.email) === false) {
    errors = {
      ...(errors || {}),
      email: "Adresse e-mail Veuillez saisir une adresse e-mail valide telle que nom@exemple.com"
    };
  }

  if (isPhone(details?.phone) === false) {
    errors = {
      ...(errors || {}),
      phone: "Entrez un numéro de téléphone valide composé d'un numéro (0-9)"
    };
  }

  if (details?.address_1?.length < 5) {
    errors = {
      ...(errors || {}),
      address_1: "L'adresse doit contenir au moins 5 caractères"
    };
  }

  if (details?.state?.length < 2 || !details?.state) {
    errors = {
      ...(errors || {}),
      state: "La wilaya doit contenir au moins 2 caractères"
    };
  }

  return errors;
}