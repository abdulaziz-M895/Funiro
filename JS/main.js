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
// products[3].children[1].textContent = "New";
// products[3].children[1].style.backgroundColor = "#2EC1AC";
// products[3].children[2].children[0].textContent = "Respira";
// products[3].children[2].children[1].textContent = "Outdoor bar table and stool";
// products[3].children[2].children[2].textContent = "EGP 27.999";
// products[3].children[2].children[3].textContent = "";

// products[4].children[1].style.display = "none";
// products[4].children[2].children[0].textContent = "Grifo";
// products[4].children[2].children[1].textContent = "Night lamp";
// products[4].children[2].children[2].textContent = "EGP 699";
// products[4].children[2].children[3].textContent = "";

// products[5].children[1].textContent = "new";
// products[5].children[1].style.backgroundColor = "#2EC1AC";
// products[5].children[2].children[0].textContent = "Muggo";
// products[5].children[2].children[1].textContent = "Luxury sofa";
// products[5].children[2].children[2].textContent = "EGP 20.999";
// products[5].children[2].children[3].textContent = "";

// products[6].children[1].textContent = "-50%";
// products[6].children[2].children[0].textContent = "Pingky";
// products[6].children[2].children[1].textContent = "Light Gray Luxury sofa";
// products[6].children[2].children[2].textContent = "EGP 10.499";
// products[6].children[2].children[3].textContent = "EGP 21.000";

// products[7].children[1].textContent = "new";
// products[7].children[1].style.backgroundColor = "#2EC1AC";
// products[7].children[2].children[0].textContent = "Potty";
// products[7].children[2].children[1].textContent = "Orange Luxury sofa";
// products[7].children[2].children[2].textContent = "EGP 24.999";
// products[7].children[2].children[3].textContent = "";

const productsMore = document.createElement("div");
productsMore.style.cssText =
  "display: flex; margin: 20px auto; align-items: center; cursor: pointer; justify-content: center; color: #B88E2F; border: 1px solid #B88E2F; font-weight: 600;  width: 245px; height: 48px;";
productsMore.textContent = "Show More";
containerProducts.append(productsMore);
// End Porducts
// Start Beautiful rooms
const beautifulCon = document.createElement("div");
beautifulCon.style.cssText =
  "position: relative; padding: 40px 0; background-color: #FCF8F3; display: flex; align-items: center; justify-content: center; gap: 30px;";
mainBody.append(beautifulCon);

const beautifulText = document.createElement("div");
beautifulText.style.cssText =
  "width: 500px; margin: 0 0 0 70px; display: flex; flex-direction: column;";
beautifulCon.append(beautifulText);

const inspiration = document.createElement("h1");
inspiration.style.cssText =
  "color: var(--Color-Gray-1, #3A3A3A);  font-size: 40px; font-weight: 700; line-height: 120%; /* 48px */ margin: 0;";
inspiration.textContent = "50+ Beautiful rooms inspiration";
beautifulText.append(inspiration);

const beautifulDes = document.createElement("p");
beautifulDes.style.cssText =
  "color: var(--Color-Gray-2, #616161);  font-weight: 500; line-height: 150%; /* 24px */";
beautifulDes.textContent =
  "Our designer already made a lot of beautiful prototipe of rooms that inspire you";
beautifulText.append(beautifulDes);

const explore = document.createElement("div");
explore.style.cssText =
  "background: #B88E2F; margin-top: 10px; cursor: pointer; width: 176px; height: 48px; color: var(--Color-White, #FFF);  font-size: 16px; font-weight: 600; line-height: 150%; display: flex; align-items: center; justify-content: center;";
explore.textContent = "Explore More";
beautifulText.append(explore);

const beautifulImages = document.createElement("div");
beautifulImages.style.cssText =
  "display: flex; align-items: flex-start; justify-content: center; width: 75%; gap: 15px; overflow: hidden;";
beautifulCon.append(beautifulImages);

const beautifulImage1 = document.createElement("div");
beautifulImage1.style.cssText =
  "min-width: 404px; height: 562px; background-image: url(images/Rectangle1.png); background-size: cover; background-repeat: no-repeat; display: flex; flex-grow: 1;";
beautifulImages.append(beautifulImage1);

const beautifulImage2Con = document.createElement("div");
beautifulImage2Con.style.cssText =
  "height: 562px; width: fit-content; display: flex; flex-direction: column; align-items: flex-start; justify-content: space-between;";
beautifulImages.append(beautifulImage2Con);

const beautifulImage2 = document.createElement("div");
beautifulImage2.style.cssText =
  "width: 300px; height: 466px; background-image: url(images/Rectangle2.png); background-size: cover; background-repeat: no-repeat;";
beautifulImage2Con.append(beautifulImage2);

const ellipses = document.createElement("div");
ellipses.style.cssText =
  "display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 20px;";
beautifulImage2Con.append(ellipses);

const activeEllipse = document.createElement("img");
activeEllipse.setAttribute("src", "images/Active.svg");
ellipses.append(activeEllipse);

for (let i = 0; i < 3; i++) {
  const inActiveEllipse = document.createElement("img");
  inActiveEllipse.setAttribute("src", "images/Ellipse.svg");
  ellipses.append(inActiveEllipse);
}

const beautifulImage3 = document.createElement("div");
beautifulImage3.style.cssText =
  "width: 80px; height: 466px; background-image: url(images/Rectangle3.png); background-size: cover; background-repeat: no-repeat;";
beautifulImages.append(beautifulImage3);

function beautifulMobile() {
  if (window.innerWidth <= 767) {
    beautifulCon.style.flexDirection = "column";
    beautifulText.style.width = "360px";
    beautifulText.style.margin = "auto";
    beautifulText.style.alignItems = "center";
    beautifulText.style.textAlign = "center";
    inspiration.style.fontSize = "37px";
    beautifulDes.style.fontSize = "15.5px";
    explore.style.margin = "10px auto 0";
  } else {
    beautifulCon.style.flexDirection = "row";
    beautifulText.style.width = "500px";
    beautifulText.style.margin = "0 0 0 70px";
    beautifulText.style.alignItems = "flex-start";
    beautifulText.style.textAlign = "left";
    inspiration.style.fontSize = "40px";
    beautifulDes.style.fontSize = "16px";
    explore.style.margin = "10px 0 0 0";
  }
}
beautifulMobile();
window.addEventListener("resize", () => {
  beautifulMobile();
});

function beautifulTablet() {
  if (window.innerWidth <= 850) {
    beautifulImage2Con.style.display = "none";
  } else {
    beautifulImage2Con.style.display = "flex";
  }
}
beautifulTablet();
window.addEventListener("resize", () => {
  beautifulTablet();
});
// End Beautiful rooms
// Start #FuniroFurniture
const funiroCon = document.createElement("div");
funiroCon.style.cssText =
  "border-bottom: 2px solid rgba(0, 0, 0, 0.17); padding-bottom: 30px;";
mainBody.append(funiroCon);

const funiroTitle = document.createElement("div");
funiroCon.append(funiroTitle);

const share = document.createElement("h2");
share.style.cssText =
  "color: var(--Color-Gray-2, #616161); margin-bottom: 5px; text-align: center;  font-size: 20px; font-weight: 600; line-height: 150%; /* 30px */";
share.textContent = "Share your setup with";
funiroTitle.append(share);

const hash = document.createElement("h1");
hash.style.cssText =
  "color: var(--Color-Gray-1, #3A3A3A); margin-top: 0; text-align: center;  font-size: 40px; font-weight: 700; line-height: 120%; /* 48px */";
hash.textContent = "#FuniroFurniture";
funiroTitle.append(hash);

const funiroMain = document.createElement("div");
funiroMain.style.cssText =
  "position: relative; overflowX: hidden; display: grid; grid-template-columns: repeat(auto-fill, minmax(22.5%, 1fr)); grid-gap: 10px; width:fit-content; margin:auto;";
funiroCon.append(funiroMain);

const funiroImg1 = document.createElement("img");
funiroImg1.setAttribute("src", "images/brick-wall-1850095.jpg");
funiroImg1.style.cssText = "width: 100%;  left: -14%; top: -45px;";
funiroMain.append(funiroImg1);

const funiroImg2 = document.createElement("img");
funiroImg2.setAttribute("src", "images/Rectangle22.png");
funiroImg2.style.cssText = "width: 100%; left: -0.5%; bottom: 7%;";
funiroMain.append(funiroImg2);

const funiroImg3 = document.createElement("img");
funiroImg3.setAttribute("src", "images/living-2882718.jpg");
funiroImg3.style.cssText = " width: 100%; left: 9.6%; top: 24px;";
funiroMain.append(funiroImg3);

const funiroImg4 = document.createElement("img");
funiroImg4.setAttribute("src", "images/home-2082922.jpg");
funiroImg4.style.cssText = " width: 100%; left: 16.6%; bottom: 23%;";
funiroMain.append(funiroImg4);

const funiroImg5 = document.createElement("img");
funiroImg5.setAttribute("src", "images/Rectangle88.png");
funiroImg5.style.cssText = " width: 100%; left: 40.7%; top: 125px;";
funiroMain.append(funiroImg5);

const funiroImg6 = document.createElement("img");
funiroImg6.setAttribute("src", "images/living-room-519682.jpg");
funiroImg6.style.cssText = " width: 100%; left: 62.5%; top: 55px;";
funiroMain.append(funiroImg6);

const funiroImg7 = document.createElement("img");
funiroImg7.setAttribute("src", "images/minimal-923194.jpg");
funiroImg7.style.cssText = " width: 100%; left: 62.5%; bottom: 11.5%;";
funiroMain.append(funiroImg7);

const funiroImg8 = document.createElement("img");
funiroImg8.setAttribute("src", "images/Rectangle11.png");
funiroImg8.style.cssText = " left: 82.6%; width: 100%; top: -31px;";
funiroMain.append(funiroImg8);
// End #FuniroFurniture
