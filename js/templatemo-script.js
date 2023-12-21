$(function () {
  $(".navbar-toggler").on("click", function (e) {
    $(".tm-header").toggleClass("show");
    e.stopPropagation();
  });

  $("html").click(function (e) {
    var header = document.getElementById("tm-header");

    if (!header.contains(e.target)) {
      $(".tm-header").removeClass("show");
    }
  });

  $("#tm-nav .nav-link").click(function (e) {
    $(".tm-header").removeClass("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var backToHomeButton = document.getElementById("backToHome");
  backToHomeButton.addEventListener("click", function () {
    window.location.href = "ex1.html";
  });
});
