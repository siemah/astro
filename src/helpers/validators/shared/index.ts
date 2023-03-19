/**
 * Check if the value given is a number
 * @param value the calue to be validate
 * @returns true if the value given is a number otherwise false
 */
export function isNumber(value: string | number | undefined) {
  value = String(value);

  return value.match(/^[0-9]+$/) !== null;
}

/**
 * Email validation
 * @param email the email to verify if is valid or not
 * @returns true if the given value is a valid email otherwise false
 */
export function isEmail(email: string) {
  const emailRegexp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  return emailRegexp.test(email);
}

/**
 * Phone validation
 * @param phone phone number to be verified
 * @returns true if it's a phone or false
 */
export function isPhone(phone: string) {
  const phoneRegexp = /^[0-9]{1,2}[\- ]?[0-9( \-)]+$/;

  return phoneRegexp.test(phone);
}