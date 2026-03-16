$(document).ready(function () {
  $(".prev-arrow").click(function (e) {
    e.preventDefault();

    $(".amalfi-carousel").trigger("prev.owl.carousel");
  });

  $(".next-arrow").click(function (e) {
    e.preventDefault();
    $(".amalfi-carousel").trigger("next.owl.carousel");
  });
});
