var list = [
  {
    name: "mon 1",
    price: 50000,
    image: "assets/images/bg1.jpg",
  },
  {
    name: "mon 2",
    price: 50000,
    image: "assets/images/bg2.jpg",
  },
  {
    name: "mon 3",
    price: 50000,
    image: "assets/images/bg3.jpg",
  },
  {
    name: "mon 4",
    price: 50000,
    image: "assets/images/bg4.jpg",
  },
  {
    name: "mon 5",
    price: 50000,
    image: "assets/images/bg5.jpg",
  },
];

list.forEach((elm, key) => {
  let html = "<div class='item' data-id='" + key + "'>";
  html += '<div class="thumb">';
  html += '<img src="' + elm.image + '" alt="bg1"></img>';
  html += "</div>";
  html += '<div class="info">';
  html += "<h4>" + elm.name + "</h4>";
  html += '<p><b class="price">' + elm.price + "</b>Vnđ</p>";
  html += "</div>";
  html += '<div class="act">';
  html += '<button class="act-btn" key="' + key + '" >Add cart</button>';
  html += "</div>";
  html += "</div>";

  $(".list-menu").append(html);
});

var cart_arr = [];

$(".list-menu").on("click", ".act-btn", function () {
  var id = $(this).closest(".item").attr("data-id");

  var check_exists;
  check_exists = cart_arr.filter((elm) => {
    if (elm.name == list[id]["name"]) {
      elm.quantity = elm.quantity + 1;
      return elm;
    }
  });

  console.log("check_exists", cart_arr);

  if (check_exists.length <= 0) {
    list[id].quantity = 1;
    cart_arr.push(list[id]);
  }

  render();
});

$(".list-cart").on("click", ".remove-btn", function () {
  var id = $(this).closest(".item-cart").attr("data-id");
  cart_arr.splice(id, 1);
  console.log(cart_arr);
  render();
});

function render() {
  $(".list-cart").empty();

  var tax = 10;
  var ship_fee = 25000;
  var total_price = 0;
  var total_payment = 0;

  cart_arr.forEach((elm, key) => {
    total_price = total_price + elm.price * elm.quantity;

    let html = '<div class="item-cart" data-id="' + key + '">';
    html += '<div class="txt-box">';
    html += "<p>" + elm.name + "</p>";
    html += "<p>" + elm.price + " Vnđ</p>";
    html += "</div>";
    html += '<div class="quantity">';
    html += '<button class="minus">-</button>';
    html +=
      '<input class="amount" value="' +
      elm.quantity +
      '" type="number" min="1" max="99" minlength="1" maxlength="2">';
    html += '<button class="plus">+</button>';
    html += "</div>";
    html += '<div class="remove">';
    html += '<button class="remove-btn">Remove</button>';
    html += "</div>";
    html += "</div>";

    $(".list-cart").append(html);
  });

  var calc_tax = (total_price / 100) * tax;
  var total_payment = total_price + calc_tax + ship_fee;

  $(".total-item").html(cart_arr.length);
  $(".tax").html(calc_tax);
  $(".ship-fee").html(ship_fee);
  $(".total-price").html(total_price);
  $(".total-payment").html(total_payment);
}

$(".list-cart").on("click", ".minus", function () {
  var id = $(this).closest(".item-cart").attr("data-id");
  if (cart_arr[id].quantity > 1) {
    cart_arr[id].quantity = cart_arr[id].quantity - 1;
    render();
  }
});

$(".list-cart").on("click", ".plus", function () {
  var id = $(this).closest(".item-cart").attr("data-id");
  if (cart_arr[id].quantity <= 99) {
    cart_arr[id].quantity = cart_arr[id].quantity + 1;
    render();
  }
});

$(".list-cart").on("change", "input", function () {
  var id = $(this).closest(".item-cart").attr("data-id");
  var amount = $(this).val();
  if (amount > 99) {
    cart_arr[id].quantity = 99;
  }
  if (amount < 1) {
    cart_arr[id].quantity = 1;
  }
  render();
});
