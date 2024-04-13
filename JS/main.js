// Products Hover Effect
let products = document.querySelectorAll(".product");
if (products) {
  products.forEach((product) => {
    let overlays = product.querySelector(".overlay-main");

    product.addEventListener("mouseover", () => {
      overlays.style.opacity = "1";
      overlays.style.zIndex = "2";
    });

    product.addEventListener("mouseout", () => {
      overlays.style.opacity = "0";
      overlays.style.zIndex = "-1";
    });
  });
}

// Show/Hide Cart
let cartBtn = document.querySelector("button.navbar-text");
cartBtn.addEventListener("click", function () {
  let cart = document.querySelector(".cart");
  cart.style.display = "block";

  document.body.classList.add("cart-opened");

  let overlay = document.createElement("div");
  overlay.classList.add("overlay-cart");
  document.body.append(overlay);

  overlay.addEventListener("click", function () {
    this.style.display = "none";
    cart.style.display = "none";
    document.body.classList.remove("cart-opened");
  });

  cart.querySelector(".exit").addEventListener("click", function () {
    overlay.style.display = "none";
    cart.style.display = "none";
    document.body.classList.remove("cart-opened");
  });
});

// Cart Logic
document.addEventListener("DOMContentLoaded", function () {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Add each cart item to the cart
  cartItems.forEach((item) => {
    if (item != {}) {
      addProductToCart(0, item);
      addProductToCheckout(item);
    }
  });

  // Update cart total
  updateCartTotal();

  // Attach event listeners for removing items and updating amounts
  removeCartItem();
  amountChanged();

  let addToCartBtns = document.querySelectorAll(".overlay-main .button");
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      addProductToCart(btn.closest(".product"));
      updateCartTotal();
    });
  });

  let cartP = document.querySelectorAll(".product-cart");
  cartP.forEach((product) => {
    if (product.querySelector(".name").textContent == "undefined") {
      product.remove();
      updateCartTotal();
    }
  });

  let placeOrder = document.querySelector(".place-order");
  let thankContainer = document.querySelector(".bottom-part .thank-con");
  let message = document.createElement("p");

  if (placeOrder) {
    placeOrder.addEventListener("click", function () {
      message.className = "thank-you";
      message.textContent =
        "Thanks for choosing us for your furniture needs! We're excited to help you transform your space.";

      // Check if thankContainer has child nodes before appending the message
      if (
        !thankContainer.hasChildNodes() &&
        document.querySelector(".top-part .products").hasChildNodes()
      ) {
        thankContainer.append(message);
      } else if (
        !thankContainer.hasChildNodes() &&
        !document.querySelector(".top-part .products").hasChildNodes()
      ) {
        message.textContent = "Your Cart Is Empty";
        thankContainer.append(message);
      }

      emptyCart();
    });
  }
});

function addProductToCart(productNode, item) {
  console.log(productNode);
  let imgSrc;
  let productName;
  let productPrice;
  let product;
  let cartProductContent;

  if (productNode) {
    imgSrc = productNode.querySelector("img").src;
    productName = productNode.querySelector(".title").innerHTML;
    productPrice = parseInt(
      productNode.querySelector(".price-after").innerHTML.slice(4)
    );

    cartProductContent = `
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

    product = {
      productName: productName,
      imgSrc: imgSrc,
      productPrice: productPrice,
    };

    addToStorage(product);

    productNode.querySelector(".button").firstChild.innerHTML = "Added to cart";
    productNode.querySelector(".button").classList.add("clicked");
  }

  let cartItemsNames = Array.from(
    document.querySelectorAll(".product-cart .name")
  );
  for (let i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].textContent == productName) {
      alert("This item is already added to the cart");
      return;
    }
  }

  if (item) {
    cartProductContent = `
    <img class="product-img" src="${item.imgSrc}" alt="alt">
    <div class="text">
      <span class="name">${item.productName}</span>
      <div class="amount">
        <input id="amount" type="number" name="amount" value="1">
        <span class="mx-1">X</span>
        <span class="price">EGP ${item.productPrice}</span>
      </div>
    </div>
    <img class="remove" src="../images/cart-x.svg" alt="alt">
  `;

    let allProducts = document.querySelectorAll(".product");
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (allProducts) {
      cartItems.forEach((item) => {
        allProducts.forEach((product) => {
          if (product.querySelector(".title").textContent == item.productName) {
            product.querySelector(".button span").textContent = "Added to cart";
            product.querySelector(".button").classList.add("clicked");
          }
        });
      });
    }
  }

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

  removeCartItem();
  amountChanged();
}

function addToStorage(product) {
  // Get existing cart items from local storage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if the product is already in the cart
  let existingProductIndex = cartItems.findIndex(
    (item) => item.productName === product.productName
  );
  if (existingProductIndex !== -1) {
    return;
  }

  // Add the product to the cart
  cartItems.push(product);

  // Save the updated cart items to local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
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

  if (document.querySelector(".checkout-page .top-part .total span span")) {
    document.querySelector(
      ".checkout-page .top-part .total span span"
    ).innerHTML = total;
  }
}
updateCartTotal();

function removeCartItem() {
  let removeBtns = document.querySelectorAll("img.remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let productName = btn.parentElement.querySelector(".name").textContent;
      btn.parentElement.remove();
      updateCartTotal();
      removeItemFromStorage(productName);

      // Find the corresponding button and update its text and class
      let addToCartBtns = document.querySelectorAll(".overlay-main .button");
      addToCartBtns.forEach((button) => {
        if (
          button.closest(".product").querySelector(".title").textContent ===
          productName
        ) {
          button.firstElementChild.innerHTML = "Add to cart";
          button.classList.remove("clicked");
        }
      });

      document
        .querySelectorAll(".checkout-page .top-part .products .product-check")
        .forEach((product) => {
          if (product.children[0].textContent == productName) {
            product.remove();
          }
        });
    });
  });
}

function removeItemFromStorage(productName) {
  let items = JSON.parse(localStorage.getItem("cartItems")) || [];
  let updatedItems = items.filter((item) => item.productName !== productName);
  localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  console.log("removed", productName);
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

// Scroll To Top Button
let upBtn = document.querySelector(".scroll-to-top");
upBtn.addEventListener("click", function () {
  document.querySelector("nav").scrollIntoView();
});

window.onscroll = function () {
  if (this.scrollY >= 800) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
};

// Checkout logic
function addProductToCheckout(item) {
  let product = document.createElement("div");
  product.classList.add(
    "product-check",
    "d-flex",
    "align-items-center",
    "justify-content-between"
  );

  let name = document.createElement("span");
  name.classList.add("name");
  name.innerHTML = item.productName;

  let price = document.createElement("span");
  price.classList.add("price");
  price.innerHTML = `EGP ${item.productPrice}`;

  let remove = document.createElement("img");
  remove.src = "../images/cart-x.svg";

  remove.addEventListener("click", function () {
    product.remove();
    document.querySelectorAll("img.remove").forEach((img) => {
      if (
        img.parentElement.querySelector(".name").textContent == name.textContent
      ) {
        img.click();
      }
    });
  });

  price.append(remove);
  product.append(name);
  product.append(price);
  if (document.querySelector(".checkout-page .top-part .products")) {
    document
      .querySelector(".checkout-page .top-part .products")
      .append(product);
  }
}

function emptyCart() {
  document.querySelectorAll("img.remove").forEach((img) => {
    img.click();
  });
}
