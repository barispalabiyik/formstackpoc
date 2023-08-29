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

const ICONS = [
  {
    menu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
`,
  },
  {
    close: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
`,
  },
];
