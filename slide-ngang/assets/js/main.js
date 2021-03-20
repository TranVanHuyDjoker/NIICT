$(document).ready(function () {
  var calc = $(".item-slide").length;
  var width_of_view = $(".container").width();

  $(".wrap-slide").css({ width: calc * width_of_view + "px" });

  var index = 0;

  $(".nav-next").click(function () {
    index = index + 1;
    if (index <= 4) {
      var posX = index * width_of_view;
      $(".wrap-slide").css({ transform: "translateX(-" + posX + "px)" });
    }
    if (index > 4) {
      index = 0;
      $(".wrap-slide").css({ transform: "translateX(0px)" });
    }
  });

  $(".nav-prev").click(function () {
    index = index - 1;
    if (index >= 0) {
      console.log(index);
      var posX = index * width_of_view;
      $(".wrap-slide").css({ transform: "translateX(-" + posX + "px)" });
    }
    if (index < 0) {
      index = calc - 1;
      var posX = index * width_of_view;
      $(".wrap-slide").css({ transform: "translateX(-" + posX + "px)" });
    }
  });
});
