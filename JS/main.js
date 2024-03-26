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