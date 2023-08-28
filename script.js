// Function to fetch and populate form fields with query params
function populateFormWithQueryParams() {
  // Parse the query parameters from the current URL
  const urlParams = new URLSearchParams(window.location.search);

  // List of query params to be fetched
  const queryParams = ["lead_id", "offer_id", "affiliate_id"];

  // Loop through each query parameter and populate the respective form field
  queryParams.forEach((param) => {
    const value = urlParams.get(param);
    if (value !== null) {
      // Select the div with the custom attribute and then find the input field inside it
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

// Run the function when the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  populateFormWithQueryParams();
});
