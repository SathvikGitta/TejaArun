// Scroll behaviour Smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile Toggle

const hamburger_menu = document.querySelector(".hamburger");
const navbar_list = document.querySelector(".navbar-items");

hamburger_menu.addEventListener("click", () => {
  console.log("Hamburger menu Clicked");
  hamburger_menu.classList.toggle("active");
  navbar_list.classList.toggle("active");
});

// Button Redirect

let btn_upwork_redirect = document.querySelector(".cta-button");
btn_upwork_redirect.style.cursor = "pointer";

btn_upwork_redirect.addEventListener("click", () => {
  window.open("https://www.upwork.com/freelancers/~0110b5735a167193bd");
});

// Copy Notification Email
const copyText = document.querySelector(".emailCopyText");
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

// Alert Notifier
let string_copy_email = "Copied Email";
const alert_text = document.querySelector(".alert-text");

copyText.addEventListener("click", () => {
  alert_text.textContent = string_copy_email;
  alert_text.style.opacity = 1;
  setTimeout(() => {
    alert_text.style.opacity = 0;
  }, 1000);
});

// Copyright Year

const Year = new Date().getFullYear();

const Year_text = document.querySelector(".copyright-year");
Year_text.textContent = Year;
