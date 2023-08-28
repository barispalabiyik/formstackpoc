function populateFormWithQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const queryParams = ["lead_id", "offer_id", "affiliate_id"];

  queryParams.forEach((param) => {
    const value = urlParams.get(param);
    if (value !== null) {
      const div = document.querySelector(
        `div[fs-field-validation-name="${param}"]`
      );
      if (div) {
        const inputField = div.querySelector("input");
        if (inputField) {
          inputField.value = value;
        }
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateFormWithQueryParams();
});
