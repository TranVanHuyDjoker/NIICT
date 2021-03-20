$(document).ready(function () {
  try {
    $.ajax({
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=HANOI&appid=d9cb7772d7a5a6fb6638d31490c19689",
      type: "get",
      dataType: "json",
      data: {},
      success: function (result) {
        console.log("ket qua: ", result);

        $(".main-temp").html(result.main.temp);
      },
    });
  } catch (error) {
    console;
  }
});
