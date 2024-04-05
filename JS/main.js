let products = document.querySelectorAll(".product");
products.forEach((product) => {
  let overlays = product.querySelector(".overlay-main");

  product.addEventListener("mouseover", () => {
    overlays.style.opacity = "1";
  });

  product.addEventListener("mouseout", () => {
    overlays.style.opacity = "0";
  });
});

let cartBtn = document.querySelector("button.navbar-text");

cartBtn.addEventListener("click", function () {
  let cart = document.querySelector(".cart");
  cart.style.display = "block";

  let overlay = document.createElement("div");
  overlay.classList.add("overlay-cart");
  document.body.append(overlay);

  overlay.addEventListener("click", function () {
    this.style.display = "none";
    cart.style.display = "none";
  });
  
  cart.querySelector(".exit").addEventListener("click", function () {
    overlay.style.display = "none";
    cart.style.display = "none";
  })
});
