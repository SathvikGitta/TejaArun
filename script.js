// navbar Toggle
let mobile_toggle = document.querySelector(".mobile-toggle-btn");
let navbarItems_list = document.querySelector(".navbar-items");

mobile_toggle.addEventListener("click", () => {
  navbarItems_list.classList.add(navbar_mobile_toggle);
  navbarItems_list.classList.remove(navbar_mobile_toggle);
});

let btn_upwork_redirect = document.querySelector(".cta-button");
btn_upwork_redirect.style.cursor = "pointer";

btn_upwork_redirect.addEventListener("click", () => {
  window.open("https://www.upwork.com/freelancers/~0110b5735a167193bd");
});

// Copy Notification Button

let string_copy_email = "Copied Email";

function notification_email(event) {
  let notificationText = document.querySelector(".notification");
  notificationText.innerHTML = string_copy_email;
}

document
  .querySelector(".notification")
  .addEventListener("click", notification_email);

const copyText = document.querySelector(".copy-email");
function copyClipboard() {
  const textValue = copyText.innerHTML || copyText.textContent;

  navigator.clipboard
    .writeText(textValue)
    .then(() => {
      console.log("Copied Value");
    })
    .catch(() => {
      console.log("Erroor");
    });
}

copyText.addEventListener("click", () => {
  copyClipboard();
});
