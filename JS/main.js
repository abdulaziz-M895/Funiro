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
