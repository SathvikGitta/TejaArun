// navbar Toggle
let mobile_toggle = document.querySelector(".mobile-toggle-btn");
let navbarItems_list = document.querySelector(".navbar-items");

mobile_toggle.addEventListener("click", () => {
  navbarItems_list.classList.add(navbar_mobile_toggle);
  navbarItems_list.classList.remove(navbar_mobile_toggle);
});

let btn_upwork_redirect = document.querySelector(".button-consultation");
btn_upwork_redirect.style.cursor = "pointer";

btn_upwork_redirect.addEventListener("click", () => {
  window.open("https://www.upwork.com/freelancers/~0110b5735a167193bd");
});

// Form Submit Notification
// let form = document.querySelector("form");
let submitAfter = document.querySelector(".after-submit");

document.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.id == "form-id") {
    submitAfter.textContent = "Submited Succesfull";
  }
});
