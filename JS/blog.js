let numBtns = document.querySelectorAll(".buttons button");
let currentBtn = 1;

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

      if (currentBtn == 1) {
        document.querySelector(".blogs-page .one").style.display = "block";
        document.querySelector(".blogs-page .two").style.display = "none";
        document.querySelector(".blogs-page .three").style.display = "none";
      } else if (currentBtn == 2) {
        document.querySelector(".blogs-page .one").style.display = "none";
        document.querySelector(".blogs-page .two").style.display = "block";
        document.querySelector(".blogs-page .three").style.display = "none";
      } else {
        document.querySelector(".blogs-page .one").style.display = "none";
        document.querySelector(".blogs-page .two").style.display = "none";
        document.querySelector(".blogs-page .three").style.display = "block";
      }

    document.querySelector(".blogs-page").scrollIntoView();

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
