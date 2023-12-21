document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit_contact", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  // Xử lý dữ liệu ở đây, như lưu vào cơ sở dữ liệu hoặc gửi email

  res.send("Thank you for your message!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// JavaScript
const elements = document.querySelectorAll(".expand-on-scroll");

window.addEventListener("scroll", () => {
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight) {
      element.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".clickable-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const ul = this.nextElementSibling;

      if (ul.style.display === "none" || !ul.style.display) {
        ul.style.display = "block";
        ul.classList.remove("fade-out");
        ul.classList.add("fade-in");
        this.classList.add("header-collapsed");
      } else {
        ul.classList.remove("fade-in");
        ul.classList.add("fade-out");
        setTimeout(() => {
          ul.style.display = "none";
        }, 300);
        this.classList.remove("header-collapsed");
      }
    });
  });
});
// Select all links with hashes
const scrollLinks = document.querySelectorAll('a[href^="#"');

// Add click event listener to each link
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get hash from link href
    const id = link.getAttribute("href");

    // Scroll to element with that id
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Query selectors for all clickable headers
const headers = document.querySelectorAll(".clickable-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    // Toggle open/closed state
    let content = header.nextElementSibling;
    content.classList.toggle("open");

    // Change icon
    let icon = header.querySelector("i");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
  });
});
// Get button element
const btn = document.querySelector(".btn-top");

// Show/hide on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Scroll to top on click
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
function handleSubmit(event) {
  event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

  // Lấy giá trị từ form
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Tạo URL cho email
  var emailBody = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  var mailtoLink = `mailto:hoangkhangbalmer@gmail.com?subject=Message%20from%20${name}&body=${emailBody}`;

  // Mở trình soạn thảo email với thông tin đã điền
  window.location.href = mailtoLink;
}
