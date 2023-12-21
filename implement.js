// Global variable to hold products
let products = [];

// Function to display the menu
function showMenu() {
  // Example menu data
  const menuData = [
    { name: "Coffee", price: "$3" },
    { name: "Tea", price: "$2" },
  ];

  const menuContainer = document.getElementById("menu");
  menuContainer.innerHTML = ""; // Clear existing menu items

  menuData.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.innerHTML = `<h3>${item.name}</h3><p>Price: ${item.price}</p>`;
    menuContainer.appendChild(menuItem);
  });
}

// Event listener for booking form
const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default submit

  // Validate and submit form data
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("res-date").value;
  const guests = document.getElementById("guests").value;
  const notes = document.getElementById("notes").value;

  if (!name) {
    alert("Vui lòng nhập họ tên");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("SĐT không hợp lệ");
    return;
  }

  if (!date) {
    alert("Vui lòng chọn ngày giờ");
    return;
  }

  // Submit form data
  const data = { name, phone, date, guests, notes };

  fetch("/book-table", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // Xử lý response
    })
    .catch((error) => {
      console.error("Lỗi:", error);
    });
});
function showAvailableTables() {
  var tables = document.getElementById("tables");
  tables.innerHTML = ""; // Clear existing tables

  for (var i = 1; i <= 24; i++) {
    var tableIcon = document.createElement("div");
    tableIcon.classList.add("table-icon");
    tableIcon.id = "A" + i;
    tableIcon.innerText = "A" + i;
    tableIcon.onclick = function () {
      selectTable(this.id);
    };
    tables.appendChild(tableIcon);
  }
}

// Function to handle table selection
function selectTable(tableId) {
  // Logic to handle table selection
  console.log("Table selected:", tableId);
  // Add your logic here
}

// Event listener for booking form
document
  .getElementById("booking-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Retrieve form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("res-date").value;
    const guests = document.getElementById("guests").value;
    const notes = document.getElementById("notes").value;

    // Validation checks
    if (!name) {
      alert("Vui lòng nhập họ tên");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("SĐT không hợp lệ");
      return;
    }

    if (!date) {
      alert("Vui lòng chọn ngày giờ");
      return;
    }

    if (!selectedTableId) {
      alert("Vui lòng chọn bàn");
      return;
    }

    // Only show success message if all validations pass
    const successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.innerHTML = "Quý khách đã đặt bàn thành công!";
    document.body.appendChild(successMessage);

    // Remove the success message after a few seconds
    setTimeout(function () {
      successMessage.remove();
    }, 3000);

    // Here, you can add logic to submit the data to a server, etc.
    console.log("Form submitted:", {
      name,
      phone,
      date,
      guests,
      notes,
      selectedTableId,
    });
  });

// Show tables when the page loads
document.addEventListener("DOMContentLoaded", function () {
  showAvailableTables();
});
// Biến lưu bàn đã chọn
let selectedTableId = null;

function selectTable(tableId) {
  // Xóa hiệu ứng chọn từ tất cả bàn
  const allTables = document.getElementsByClassName("table-icon");
  for (let table of allTables) {
    table.classList.remove("selected");
  }

  // Thêm hiệu ứng chọn vào bàn được chọn
  const selectedTable = document.getElementById(tableId);
  selectedTable.classList.add("selected");

  selectedTableId = tableId; // Cập nhật bàn đã chọn
}

const totalTables = 24;
const bookedTables = 10; // Lấy từ server

const availableTables = totalTables - bookedTables;

const availableCountElement = document.getElementById("available-table-count");

availableCountElement.innerText = `Số bàn trống: ${availableTables}`;

// Đầu tiên, chọn nút cần xử lý sự kiện
