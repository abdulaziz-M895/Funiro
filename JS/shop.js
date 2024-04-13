let allProducts = document.querySelectorAll(".product");
const productsCon = document.querySelector(".products .container .content");
let previousValue = 16;
let selectedValue;

document
  .querySelector(".show-box select")
  .addEventListener("change", function () {
    selectedValue = parseInt(this.value);
    // Check if the selected value is greater than the previous value
    generateProducts(selectedValue, previousValue);

    // Update the filter options text
    document.querySelector(".filter-options p span").innerHTML = selectedValue;

    // Update the previous value with the current value
    previousValue = selectedValue;

    allProducts = document.querySelectorAll(".product");
  });

document.querySelector(".sort select").addEventListener("change", function () {
  let sortOrder = this.value;

  // Extract prices and corresponding products
  let priceProductPairs = [];
  allProducts.forEach((product) => {
    let price = parseFloat(
      product.querySelector(".price-after").textContent.slice(4)
    );
    priceProductPairs.push({ price: price, product: product });
  });

  // Handle sorting based on selected sort order
  if (sortOrder === "highToLow") {
    priceProductPairs.sort((a, b) => b.price - a.price); // Sort high to low
  } else if (sortOrder === "lowToHigh") {
    priceProductPairs.sort((a, b) => a.price - b.price); // Sort low to high
  } else {
    priceProductPairs = shuffleArray(priceProductPairs); // Shuffle array randomly
  }

  // Rearrange products in the container
  productsCon.innerHTML = ""; // Clear existing products
  priceProductPairs.forEach((pair) => {
    productsCon.appendChild(pair.product);
  });
  allProducts = document.querySelectorAll(".product");
});

function generateProducts(selectedValue, previousValue) {
  if (selectedValue > previousValue) {
    productsCon.innerHTML = "";
    for (let i = 0; i < selectedValue; i++) {
      let newProduct = allProducts[i % allProducts.length].cloneNode(true);
      productsCon.append(newProduct);
    }
  } else if (selectedValue < previousValue) {
    let productsToRemove = previousValue - selectedValue;
    for (let i = 0; i < productsToRemove; i++) {
      // Check if there are still products to remove
      if (productsCon.children.length > 0) {
        productsCon.removeChild(productsCon.lastChild);
      }
    }
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

///////////////////////////////////////////

let numBtns = document.querySelectorAll(".buttons button");
let originalProductsOrder = Array.from(allProducts);

let currentBtn = 1;

// Shuffle the originalProductsOrder array when a button is clicked
numBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.textContent == "1") {
      currentBtn = 1;
    } else if (btn.textContent == "2") {
      currentBtn = 2;
    } else if (btn.textContent == "3") {
      currentBtn = 3;
    }
    if (
      !this.classList.contains("active") &&
      !this.classList.contains("next") &&
      !this.classList.contains("prev")
    ) {
      check();
      numBtns.forEach((ele) => {
        ele.classList.remove("active");
      });
      this.classList.add("active");

      shuffleArray(originalProductsOrder);

      // Clear the container
      productsCon.innerHTML = "";

      // Append products from the shuffled order
      originalProductsOrder.forEach((product) => {
        productsCon.appendChild(product);
      });

      // Scroll to the top of the container
      document
        .querySelector(".options")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (this.classList.contains("next")) {
      handleButtonClick("next");
    } else if (this.classList.contains("prev")) {
      handleButtonClick("prev");
    }
  });
});

// Function to handle button clicks
function handleButtonClick(direction) {
  check(); // Update the button states

  // Find the currently active button
  const activeButton = Array.from(numBtns).find((ele) =>
    ele.classList.contains("active")
  );

  // Determine the target button based on the direction
  let targetButton;
  if (direction === "next") {
    targetButton = activeButton.nextElementSibling;
  } else if (direction === "prev") {
    targetButton = activeButton.previousElementSibling;
  }

  // Trigger a click on the target button if it exists
  if (targetButton) {
    targetButton.click();
  }
}

function check() {
  if (currentBtn == 1) {
    document.querySelector(".buttons button.prev").classList.add("disabled");
    document.querySelector(".buttons button.next").classList.remove("disabled");
  } else if (currentBtn == 3) {
    document.querySelector(".buttons button.next").classList.add("disabled");
    document.querySelector(".buttons button.prev").classList.remove("disabled");
  } else {
    document.querySelector(".buttons button.prev").classList.remove("disabled");
    document.querySelector(".buttons button.next").classList.remove("disabled");
  }
}

window.onload = function () {
  check();
};
