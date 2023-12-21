function openTab(evt, tabName) {
  // Lấy tất cả các phần tử có class "tabcontent" và ẩn chúng đi
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Lấy tất cả các phần tử có class "tablinks" và xóa class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Hiển thị tab content hiện tại và thêm class "active" vào nút tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
