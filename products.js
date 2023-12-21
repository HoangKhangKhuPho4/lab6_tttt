// Lấy thẻ nút "Thanh toán"
// Lấy thẻ nút "Thanh toán"
// Lấy thẻ nút "Thanh toán"
const checkoutButton = document.getElementById("checkoutButton");

// Thêm sự kiện "click" cho nút "Thanh toán"
checkoutButton.addEventListener("click", () => {
  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Kiểm tra nếu tổng số lượng bằng 0
  if (totalQuantity === 0) {
    alert(
      "Xin quý khách vui lòng chọn mua sản phẩm ưng ý trước khi thanh toán."
    );
    return; // Ngăn không cho tiếp tục nếu không có sản phẩm hoặc số lượng bằng 0
  }

  // Tiếp tục với quá trình thanh toán nếu có sản phẩm trong giỏ hàng
  alert("Thanh toán thành công!");

  // Hiển thị cửa sổ đánh giá sau khi thanh toán
  document.getElementById("overlay").style.display = "block";
  document.getElementById("reviewPanel").style.display = "block";

  // Làm sạch giỏ hàng sau khi thanh toán
  cartItems = [];
  updateCart();
});

// Lấy thẻ ô tìm kiếm và nút tìm kiếm
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Lấy danh sách sản phẩm
const products = [
  {
    name: "Cà phê đen",
    price: 20000,
    image: "img/capheden.jpg",
    link: "",
  },
  // Thêm các sản phẩm khác vào đây
];

// Đối tượng sản phẩm thứ 2
const product2 = {
  name: "Cà phê sữa",
  price: 25000,
  image: "img/caphesua.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product2);

const product3 = {
  name: "Cà phê đá xoay",
  price: 30000,
  image: "img/caphedaxoay.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product3);

const product4 = {
  name: "Cà phê cốt dừa",
  price: 35000,
  image: "img/caphecotdua.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product4);

const product5 = {
  name: "Machiato",
  price: 100000,
  image: "img/machiato.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product5);

const product6 = {
  name: "latte",
  price: 200000,
  image: "img/latte.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product6);

const product7 = {
  name: "Mocha",
  price: 500000,
  image: "img/mocha.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product7);

// Thêm sự kiện "click" cho nút tìm kiếm
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const searchResults = searchProducts(products, searchTerm);
  displaySearchResults(searchResults);
});

// Hàm tìm kiếm sản phẩm
function searchProducts(products, term) {
  // Chuyển đổi từ khóa tìm kiếm và tên sản phẩm thành chữ thường
  const searchTermLower = term.toLowerCase();

  // Sử dụng phương thức filter để tìm kiếm sản phẩm
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTermLower)
  );
}

// Hàm hiển thị kết quả tìm kiếm
function displaySearchResults(results) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Xóa nội dung hiện tại của danh sách sản phẩm

  if (results.length === 0) {
    productList.innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
  } else {
    results.forEach((product) => {
      productList.innerHTML += `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Giá: ${product.price} VNĐ</p>
                    <a href="${product.link}" class="product-link">Xem chi tiết</a>
                </div>
            `;
    });
  }
}
// Hàm xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(productName) {
//   // Tìm sản phẩm có tên trùng khớp trong giỏ hàng và xóa nó
//   const index = cartItems.findIndex((item) => item.name === productName);
//   if (index !== -1) {
//     cartItems.splice(index, 1);
//     updateCart(); // Cập nhật giỏ hàng sau khi xóa sản phẩm
//   }
// }
// Lấy thẻ nút xóa bên cạnh nút thanh toán

// Lấy thẻ ô tìm kiếm
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchProductsAndDisplay(searchInput.value);
  }
});

function searchProductsAndDisplay(term) {
  const results = searchProducts(products, term);
  displaySearchResults(results);
}

// Lấy nút quay lại trang chủ
const homeBtn = document.getElementById("homeButton");

// Thêm sự kiện click
homeBtn.addEventListener("click", function () {
  // Thay đổi màu nền
  this.style.backgroundColor = "blue";

  // Đặt lại màu nền về ban đầu sau 1 giây
  setTimeout(() => {
    this.style.backgroundColor = "";
  }, 1000);

  // Chuyển trang
  location.href = "implement.html";
});
// Khi rê chuột vào
homeBtn.onmouseover = function () {
  this.style.backgroundColor = "red";
};

// Khi rê chuột ra
homeBtn.onmouseout = function () {
  this.style.backgroundColor = "";
};
document.getElementById("checkoutButton").onclick = function () {
  document.getElementById("reviewPanel").style.display = "block";
};
document.getElementById("checkoutButton").onclick = function () {
  document.getElementById("overlay").style.display = "block";

  document.getElementById("reviewPanel").style.display = "block";
};
const stars = document.querySelectorAll("#ratings .fa-star");
stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    highlightStars(index);
  });
  star.addEventListener("mouseout", () => {
    unhighlightStars();
  });
  star.addEventListener("click", () => {
    setRating(index + 1);
  });
});

function highlightStars(index) {
  stars.forEach((star, i) => {
    star.classList.toggle("hovered", i <= index);
  });
}

function unhighlightStars() {
  stars.forEach((star) => {
    star.classList.remove("hovered");
  });
}

function setRating(rating) {
  // Thêm xử lý để lưu giá trị đánh giá
}
document
  .getElementById("noReviewButton")
  .addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("reviewPanel").style.display = "none";
  });
document.getElementById("reviewButton").addEventListener("click", function () {
  // Xử lý đánh giá ở đây

  // Đóng cửa sổ đánh giá
  document.getElementById("overlay").style.display = "none";
  document.getElementById("reviewPanel").style.display = "none";
});
document.getElementById("reviewButton").addEventListener("click", function () {
  window.location.href = "DanhGia.html"; // Điều hướng đến trang DanhGia.html
});
document.querySelectorAll("#ratings .fa-star").forEach((star) => {
  star.addEventListener("click", function () {
    let rating = this.dataset.value;
    setRating(rating);
  });
});

document.querySelectorAll("#ratings .fa-star").forEach((star) => {
  star.addEventListener("click", function () {
    let isRated = this.getAttribute("data-rated") === "true";
    this.style.color = isRated ? "gray" : "gold";
    this.setAttribute("data-rated", isRated ? "false" : "true");
  });
});
document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("reviewPanel").style.display = "none";
});
