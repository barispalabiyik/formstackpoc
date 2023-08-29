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

const toggleMenu = () => {
  const menu = document.querySelector(".menu-icon");
  const close = document.querySelector(".close-menu");
  const nav = document.querySelector(".rcn-mobile-menu");
  const body = document.querySelector("body");

  menu.addEventListener("click", () => {
    nav.classList.add("show-element");
    body.classList.add("overflow-hidden");
  });

  close.addEventListener("click", () => {
    nav.classList.remove("show-element");
    body.classList.remove("overflow-hidden");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  populateFormWithQueryParams();
  toggleMenu();
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
