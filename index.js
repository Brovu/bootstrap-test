$(document).ready(function () {
  $("#carouselExampleIndicators").carousel();

  $("#carouselExampleIndicators").click(() => {
    $(".carousel-control-next").carousel("next");
  });

  setInterval(() => {
    $(".carousel-control-next").click();
  }, 2000);

  $("#carouselExampleIndicators").click(() => {
    $(".carousel-control-prev").carousel("prev");
  });

  $("#exampleModal").modal({ show: false }); // Khởi tạo modal, không hiển thị mặc định

  $("#launchButton").click(function () {
    $("#exampleModal").modal("show"); // Khi nhấp vào button, hiển thị modal
  });
});
