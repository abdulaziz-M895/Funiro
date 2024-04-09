document.addEventListener("DOMContentLoaded", function () {
  start();
});

function start() {
  removeCartItem();

  amountChanged()

  let addToCartBtns = document.querySelectorAll(".overlay-main .button");
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      addProductToCart(btn);
      updateCartTotal();
    });
  });
}

function addProductToCart(button) {
  let productNode = button.closest(".product");
  let imgSrc = productNode.querySelector("img").src;
  let productName = productNode.querySelector(".title").innerHTML;
  let productPrice = parseInt(
    productNode.querySelector(".price-after").innerHTML.slice(4)
  );

  let cartItemsNames = Array.from(
    document.querySelectorAll(".product-cart .name")
  );
  for (let i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].textContent == productName) {
      alert("This item is already added to the cart");
      return;
    }
  }

  let cartProductContent = `
  <img class="product-img" src="${imgSrc}" alt="alt">
  <div class="text">
    <span class="name">${productName}</span>
    <div class="amount">
      <input id="amount" type="number" name="amount" value="1">
      <span class="mx-1">X</span>
      <span class="price">EGP ${productPrice}</span>
    </div>
  </div>
  <img class="remove" src="../images/cart-x.svg" alt="alt">
  `;

  let cartProduct = document.createElement("div");
  cartProduct.classList.add(
    "product-cart",
    "d-flex",
    "align-items-center",
    "justify-content-around"
  );

  cartProduct.innerHTML = cartProductContent;

  let cart = document.querySelector(".cart .products");
  cart.appendChild(cartProduct);
  console.log("Adding product to cart");

  removeCartItem();

  amountChanged();
}

function updateCartTotal() {
  let total = 0;

  let cartProducts = document.querySelectorAll(".products .product-cart");

  cartProducts.forEach((product) => {
    let productAmount = product.querySelector("#amount");

    let curruntSinglePrice = +product
      .querySelector("span.price")
      .innerHTML.slice(4);

    total += curruntSinglePrice * productAmount.value;
  });

  document.querySelector(".cart .total span span").innerHTML = total;
}
updateCartTotal();

function removeCartItem() {
  let removeBtns = document.querySelectorAll("img.remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.parentElement.remove();
      updateCartTotal();
    });
  });
}

function amountChanged() {
  let allAmounts = document.querySelectorAll("#amount");
  allAmounts.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value <= 0 || isNaN(input.value)) {
        input.value = "1"; // Reset to 1 if invalid value
      }
      updateCartTotal();
    });
  });
}