/**
 * Construct js object(json like) from FormData
 * @param data FormData instance containing all form inputs
 * @returns object constructed from FormData
 */
export function objectifyFormData(data: FormData) {
  let results: Record<string, string | number | Record<string, string | number>> = {};

  data.forEach((value, key) => {
    // get all form data with name look like option[size]
    const matchedKeys = /(\w+)\[(\w+)\]/.exec(key);

    if (matchedKeys !== null) {
      const [, parentKey, childKey] = matchedKeys;
      results[parentKey] = {
        ...(results[parentKey] as object || {}),
        [childKey]: value
      } as Record<string, string | number>;
    } else {
      results[key] = String(value);
    }
  });

  return results;
}