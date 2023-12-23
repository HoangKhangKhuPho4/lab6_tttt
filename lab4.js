function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  var currentTab = document.getElementById(tabName);

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    // Kiểm tra nếu tab hiện tại đã được mở, đóng nó và thoát khỏi hàm
    if (tabcontent[i] === currentTab && currentTab.style.display === "block") {
      currentTab.style.display = "none";
      evt.currentTarget.className = evt.currentTarget.className.replace(
        " active",
        ""
      );
      return;
    }
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  currentTab.style.display = "block";
  evt.currentTarget.className += " active";
}

// Mặc định hiển thị tab đầu tiên
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablinks").click();
});
