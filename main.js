document.body.style.cssText = "padding: 0; margin: 0; font-family: Poppins;";

const mainBody = document.createElement("div");
mainBody.style.width = "100%";

const containerHead = document.createElement("div");
containerHead.classList.add("container");
containerHead.style.margin = "auto";

document.body.prepend(mainBody);
mainBody.append(containerHead);

// Start Header

const header = document.createElement("header");
header.style.cssText =
  "display: inline-flex; flex-direction: column; align-items: center; gap: 30px; width: 100%;";
containerHead.append(header);

const topHeader = document.createElement("div");
topHeader.style.cssText =
  "display: flex; align-items: center; justify-content: space-between; width: 100%;";
header.append(topHeader);

// logo
const logo = document.createElement("a");
logo.setAttribute("href", "#");
logo.style.cssText =
  "display: flex; align-items: center; justify-content: center; text-decoration: none;";

const logoIcon1 = document.createElement("img");
logoIcon1.setAttribute("src", "images/Meubel House_Logos-05.png");
logoIcon1.style.cssText = "width: 3.125rem; height: 2rem;";

const logoText = document.createElement("p");
logoText.textContent = "Furniro";
logoText.style.cssText =
  "color: #000; font-family: Montserrat; font-size: 2.125rem; font-weight: 700; margin-left: 10px;";

logo.append(logoIcon1);
logo.append(logoText);
topHeader.append(logo);

// sections
const sectionsDiv = document.createElement("div");
sectionsDiv.style.cssText =
  "display: flex; flex: 1; gap: 1.75rem; justify-content: center;";
topHeader.append(sectionsDiv);

const homeP = document.createElement("p");
homeP.textContent = "Home";
homeP.classList.add("section");
sectionsDiv.append(homeP);

const shopP = document.createElement("p");
shopP.textContent = "shop";
shopP.classList.add("section");
sectionsDiv.append(shopP);

const aboutP = document.createElement("p");
aboutP.textContent = "About";
aboutP.classList.add("section");
sectionsDiv.append(aboutP);

const contactP = document.createElement("p");
contactP.textContent = "Contact";
contactP.classList.add("section");
sectionsDiv.append(contactP);

let section = document.querySelectorAll(".section");
for (let i = 0; i < section.length; i++) {
  section[i].style.cssText =
    "color: #000; font-size: 1.3rem; font-style: normal; font-weight: 500; line-height: normal; cursor: pointer;";
}

// Icons
const iconsContainer = document.createElement("div");
iconsContainer.style.cssText =
  "display: flex; align-items: center; gap: 1.75rem;";
topHeader.append(iconsContainer);

const account = document.createElement("img");
account.setAttribute("src", "images/mdi_account-alert-outline.svg");
account.setAttribute("alt", "account alert");
account.style.cssText = "width: 1.75rem; height: 1.75rem; cursor: pointer;";
iconsContainer.append(account);

const search = document.createElement("img");
search.setAttribute("src", "images/akar-icons_search.svg");
search.setAttribute("alt", "search");
search.style.cssText = "width: 1.75rem; height: 1.75rem; cursor: pointer;";
iconsContainer.append(search);

const heart = document.createElement("img");
heart.setAttribute("src", "images/akar-icons_heart.svg");
heart.setAttribute("alt", "heart");
heart.style.cssText = "width: 1.75rem; height: 1.75rem; cursor: pointer;";
iconsContainer.append(heart);

const cart = document.createElement("img");
cart.setAttribute("src", "images/ant-design_shopping-cart-outlined.svg");
cart.setAttribute("alt", "cart");
cart.style.cssText = "width: 1.75rem; height: 1.75rem; cursor: pointer;";
iconsContainer.append(cart);

function headerMobile() {
  if (window.innerWidth <= 850) {
    logoIcon1.style.cssText = "width: 2.5rem; height: 1.5rem;";
    logoText.style.fontSize = "1.8rem";
    sectionsDiv.style.display = "none";
    iconsContainer.style.gap = "1.3rem";
  } else {
    sectionsDiv.style.display = "flex";
    logoIcon1.style.cssText = "width: 3.125rem; height: 2rem;";
    logoText.style.fontSize = "2.125rem";
    iconsContainer.style.gap = "1.75rem";
  }
}
headerMobile();
window.addEventListener("resize", () => {
  headerMobile();
});

// End Header
// Start discover
const bodyContent = document.createElement("div");
mainBody.append(bodyContent);

const discover = document.createElement("div");
discover.style.cssText =
  "background: url(images/background1.png) center center, 0% 0% / cover no-repeat lightgray; position: relative;";
bodyContent.append(discover);

const discoverBox = document.createElement("div");
discover.append(discoverBox);

const arrival = document.createElement("p");
arrival.style.cssText =
  "color: var(--Font-Color, #333);  font-weight: 600; letter-spacing: 3px; margin-left: 10px; margin-bottom: 5px;";
arrival.textContent = "New Arrival";
discoverBox.append(arrival);

const newCollection = document.createElement("h1");
newCollection.textContent = "Discover Our New Collection";
discoverBox.append(newCollection);

const discoverLorem = document.createElement("p");
discoverLorem.style.cssText =
  "color: var(--Font-Color, #333);  font-size: 18px; font-weight: 500; line-height: 24px; margin: 0 0 0 10px;";
discoverLorem.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.";
discoverBox.append(discoverLorem);

const buy = document.createElement("div");
buy.style.cssText =
  "display: inline-flex; padding: 25px 72px; align-items: flex-start; gap: 10px; background: var(--Primary, #B88E2F); position: absolute; bottom: 30px; margin: 0 0 0 10px; cursor: pointer;";
discoverBox.append(buy);

const buyText = document.createElement("p");
buyText.style.cssText = "color: #FFF;  font-weight: 700; margin: 0;";
buyText.textContent = "BUY NOW";
buy.append(buyText);

function discoverMobile() {
  if (window.innerWidth <= 767) {
    discover.style.height = "717px";
    discoverBox.style.cssText =
      "position: absolute; padding: 20px; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgb(255, 243, 227); border-radius: 10px; width: 315px; height: 360px; z-index: 2;";
    newCollection.style.cssText =
      "color: var(--Primary, #B88E2F);  font-size: 40px; font-weight: 700; line-height: 50px; max-width: 400px; margin: 0px 0px 15px 8px;";
  } else {
    discover.style.height = "717px";
    discoverBox.style.cssText =
      "position: absolute; padding: 30px; top: 50%; right: 20px; transform: translate(0, -50%); background-color: #FFF3E3; border-radius: 10px; width: 550px; height: 350px; z-index: 2;";
    newCollection.style.cssText =
      "color: var(--Primary, #B88E2F);  font-size: 52px; font-weight: 700; line-height: 65px; max-width: 400px; margin: 0 0 15px 8px";
  }
}
discoverMobile();
window.addEventListener("resize", () => {
  discoverMobile();
});
// End discover
// Start Browse
const containerBrowse = document.createElement("div");
containerBrowse.classList.add("container");
containerBrowse.style.margin = "auto";
mainBody.append(containerBrowse);

const browseHead = document.createElement("div");
browseHead.style.cssText =
  "display: flex; align-items: center; justify-content: center; flex-direction: column;";
containerBrowse.append(browseHead);

const browseH1 = document.createElement("h1");
browseH1.style.cssText =
  "color: var(--Font-Color, #333);  font-size: 32px; font-weight: 700; margin: 40px 0 0 0;";
browseH1.textContent = "Browse The Range";
browseHead.append(browseH1);

const browseP = document.createElement("p");
browseP.style.cssText =
  "color: var(--Font-Color1, #666); text-align: center;  font-size: 20px; font-weight: 400; margin-bottom: 30px;";
browseP.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
browseHead.append(browseP);

const browseMain = document.createElement("div");
browseMain.style.cssText = "display: flex; align-items: center; gap: 20px;";
containerBrowse.append(browseMain);

let browseBox;
for (let i = 0; i < 3; i++) {
  browseBox = document.createElement("div");
  browseBox.classList.add("browse-box");
  browseBox.style.cssText =
    "display: flex; flex-direction: column; align-items: center; gap: 20px; margin: auto;";
  browseMain.append(browseBox);

  let browseImg = document.createElement("div");
  browseImg.style.cssText =
    "width: 100%; background: url(images/image106.png), lightgray 50% / cover no-repeat; height: 480px; border-radius: 10px; background-repeat: no-repeat; background-size: cover; background-position: center;";
  browseBox.append(browseImg);

  let browseText = document.createElement("p");
  browseText.style.cssText =
    "color: var(--Font-Color, #333); text-align: center;  font-size: 24px; font-weight: 600;";
  browseBox.append(browseText);
}
let allBoxs = document.querySelectorAll(".browse-box");
allBoxs[0].firstElementChild.style.backgroundImage = "url(images/image106.png)";
allBoxs[1].firstElementChild.style.backgroundImage = "url(images/image100.png)";
allBoxs[2].firstElementChild.style.backgroundImage = "url(images/image101.png)";

allBoxs[0].lastElementChild.textContent = "Dining";
allBoxs[1].lastElementChild.textContent = "Living";
allBoxs[2].lastElementChild.textContent = "Bedroom";

function browseMobile() {
  if (window.innerWidth <= 767) {
    browseH1.style.fontSize = "30px";
    browseP.style.fontSize = "15px";
    browseMain.style.flexDirection = "column";
    allBoxs.forEach((ele) => {
      ele.style.width = "96%";
    });
  } else {
    browseH1.style.fontSize = "32px";
    browseP.style.fontSize = "20px";
    browseMain.style.flexDirection = "row";
    allBoxs.forEach((ele) => {
      ele.style.width = "calc(90% / 3)";
    });
  }
}
browseMobile();
window.addEventListener("resize", () => {
  browseMobile();
});
// End Browse
// Start Porducts
const containerProducts = document.createElement("div");
containerProducts.classList.add("container");
containerProducts.style.margin = "auto";
mainBody.append(containerProducts);

const porductsTitle = document.createElement("h1");
porductsTitle.textContent = "Our Products";
porductsTitle.style.cssText =
  "color: var(--Color-Gray-1, #3A3A3A); text-align: center;  font-size: 40px; font-weight: 700; line-height: 120%; /* 48px */";
containerProducts.append(porductsTitle);

const productsCon = document.createElement("div");
productsCon.style.cssText =
  "display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 15px;";
containerProducts.append(productsCon);

let product;
let overlay;
for (let i = 0; i < 8; i++) {
  product = document.createElement("div");
  product.classList.add("product");
  product.style.cssText = "width: 350px; position: relative;";
  productsCon.append(product);

  let productImg = document.createElement("img");
  productImg.setAttribute("src", `images/image${i + 1}.png`);
  productImg.style.cssText = "width: 100%;";
  product.append(productImg);

  let discount = document.createElement("div");
  discount.style.cssText =
    "background-color: #E97171; display: flex; justify-content: center; align-items: center; position: absolute; top: 15px; right: 15px; border-radius: 50%; width: 48px; height: 48px; color: var(--Color-White, #FFF);  font-size: 16px; font-weight: 500; line-height: 150%; /* 24px */";
  discount.textContent = "-30%";
  product.append(discount);

  let productText = document.createElement("div");
  productText.style.cssText =
    "padding: 20px 17px 35px; background-color: #F4F5F7; margin-top: -4.5px;";
  product.append(productText);

  let text1 = document.createElement("p");
  text1.style.cssText =
    "color: var(--Color-Gray-1, #3A3A3A);  font-size: 24px; font-weight: 600; line-height: 120%; /* 28.8px */ margin: 0;";
  text1.textContent = "Syltherine";
  productText.append(text1);

  let text2 = document.createElement("p");
  text2.style.cssText =
    "color: var(--Color-Gray-3, #898989);  font-size: 16px; font-weight: 500; line-height: 150%; /* 24px */ margin: 7px 0;";
  text2.textContent = "Stylish cafe table set";
  productText.append(text2);

  let text3 = document.createElement("p");
  text3.style.cssText =
    "color: var(--Color-Gray-1, #3A3A3A);  font-size: 20px; font-weight: 600; line-height: 150%; /* 30px */ margin: 0 15px 0 0; display: inline-block;";
  text3.textContent = "EGP 14.000";
  productText.append(text3);

  let text4 = document.createElement("p");
  text4.style.cssText =
    "color: var(--Color-Gray-4, #B0B0B0);  font-size: 16px; font-weight: 400; line-height: 150%; /* 24px */ text-decoration: line-through; margin: 0; display: inline-block;";
  text4.textContent = "EGP 20000";
  productText.append(text4);

  overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.style.cssText =
    "background: var(--Color-Gray-1, #3a3a3abd); transition: 0.3s; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%; position: absolute; opacity: 0; bottom: 0;";
  product.append(overlay);

  let overlayButton = document.createElement("div");
  overlayButton.style.cssText =
    "display: flex; justify-content: center; cursor: pointer; width: 85%; height: 48px; align-items: center; background: #fff; color: var(--Primary, #B88E2F);  font-size: 16px; font-weight: 600; line-height: 150%; /* 24px */";
  overlayButton.textContent = "Add to cart";
  overlay.append(overlayButton);

  let impresions = document.createElement("div");
  impresions.style.cssText =
    "display: flex; align-items: center; justify-content: center; gap: 20px; color: white;";
  overlay.append(impresions);

  let share = document.createElement("p");
  share.style.cssText =
    "cursor: pointer;  font-size: 16px; font-weight: 600; line-height: 150%; /* 24px */ display: flex; align-items: center;";
  share.textContent = "Share";
  let shareIcon = document.createElement("img");
  shareIcon.setAttribute("src", "images/gridicons_share.svg");
  shareIcon.style.cssText = "width: 16px; height: 16px; margin-right: 6px";
  share.prepend(shareIcon);
  impresions.append(share);

  let compare = document.createElement("p");
  compare.style.cssText =
    "cursor: pointer;  font-size: 16px; font-weight: 600; line-height: 150%; /* 24px */ display: flex; align-items: center;";
  compare.textContent = "Compare";
  let compareIcon = document.createElement("img");
  compareIcon.setAttribute("src", "images/compare-svgrepo-com1.svg");
  compareIcon.style.cssText = "width: 16px; height: 16px; margin-right: 6px";
  compare.prepend(compareIcon);
  impresions.append(compare);

  let like = document.createElement("p");
  like.style.cssText =
    "cursor: pointer;  font-size: 16px; font-weight: 600; line-height: 150%; /* 24px */ display: flex; align-items: center;";
  like.textContent = "Like";
  let likeIcon = document.createElement("img");
  likeIcon.setAttribute("src", "images/Heart.svg");
  likeIcon.style.cssText = "width: 16px; height: 16px; margin-right: 6px";
  like.prepend(likeIcon);
  impresions.append(like);

  let products = document.querySelectorAll(".product");

  products.forEach((product) => {
    let overlays = product.querySelector(".overlay");

    product.addEventListener("mouseover", () => {
      overlays.style.opacity = "1";
    });

    product.addEventListener("mouseout", () => {
      overlays.style.opacity = "0";
    });
  });
}
let products = document.querySelectorAll(".product");
products[1].children[1].style.display = "none";
products[1].children[2].children[0].textContent = "Liveosa";
products[1].children[2].children[1].textContent = "Stylish cafe chair";
products[1].children[2].children[2].textContent = "EGP 1.499";
products[1].children[2].children[3].textContent = "";

products[2].children[1].textContent = "-50%";
products[2].children[2].children[0].textContent = "Lolito";
products[2].children[2].children[1].textContent = "Luxury big sofa";
products[2].children[2].children[2].textContent = "EGP 14.999";
products[2].children[2].children[3].textContent = "EGP 20.000";

products[3].children[1].textContent = "New";
products[3].children[1].style.backgroundColor = "#2EC1AC";
products[3].children[2].children[0].textContent = "Respira";
products[3].children[2].children[1].textContent = "Outdoor bar table and stool";
products[3].children[2].children[2].textContent = "EGP 27.999";
products[3].children[2].children[3].textContent = "";

products[4].children[1].style.display = "none";
products[4].children[2].children[0].textContent = "Grifo";
products[4].children[2].children[1].textContent = "Night lamp";
products[4].children[2].children[2].textContent = "EGP 699";
products[4].children[2].children[3].textContent = "";

products[5].children[1].textContent = "new";
products[5].children[1].style.backgroundColor = "#2EC1AC";
products[5].children[2].children[0].textContent = "Muggo";
products[5].children[2].children[1].textContent = "Luxury sofa";
products[5].children[2].children[2].textContent = "EGP 20.999";
products[5].children[2].children[3].textContent = "";

products[6].children[1].textContent = "-50%";
products[6].children[2].children[0].textContent = "Pingky";
products[6].children[2].children[1].textContent = "Light Gray Luxury sofa";
products[6].children[2].children[2].textContent = "EGP 10.499";
products[6].children[2].children[3].textContent = "EGP 21.000";

products[7].children[1].textContent = "new";
products[7].children[1].style.backgroundColor = "#2EC1AC";
products[7].children[2].children[0].textContent = "Potty";
products[7].children[2].children[1].textContent = "Orange Luxury sofa";
products[7].children[2].children[2].textContent = "EGP 24.999";
products[7].children[2].children[3].textContent = "";

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
// Start Footer
const footer = document.createElement("footer");
mainBody.append(footer);

const footerCon = document.createElement("div");
footerCon.classList.add("container");
footerCon.style.cssText =
  "display: flex; align-items: flex-start; justify-content: space-between; margin: auto; padding: 30px 0; flex-wrap: wrap;";
footer.append(footerCon);

const footerLeft = document.createElement("div");
footerCon.append(footerLeft);

const footerLeftFuniro = document.createElement("a");
footerLeftFuniro.setAttribute("href", "#");
footerLeftFuniro.style.cssText =
  "color: black; font-size: 24px; font-weight: 700; text-decoration: none;";
footerLeftFuniro.textContent = "Funiro.";
footerLeft.append(footerLeftFuniro);

const footerLeftAdress = document.createElement("p");
footerLeftAdress.style.cssText = "color: #9F9F9F; line-height: 1.7;";
footerLeftAdress.innerHTML =
  "400 University Drive Suite 200 Coral</br> Gables,</br>FL 33134 USA";
footerLeft.append(footerLeftAdress);

const footerLinks = document.createElement("div");
footerLinks.style.cssText =
  "display: flex; align-items: flex-start; flex-direction: column; width: 20%;";
footerCon.append(footerLinks);

const footerLinksTitle = document.createElement("h4");
footerLinksTitle.style.cssText =
  "color: #9F9F9F; font-size: 18px; margin-top: 0; width: 100%; font-weight: 500;";
footerLinksTitle.textContent = "Links";
footerLinks.append(footerLinksTitle);

const footerLink1 = document.createElement("a");
footerLink1.classList.add("footer");
footerLink1.setAttribute("href", "#");
footerLink1.style.cssText = "font-weight: 500; padding: 12px 0;";
footerLink1.textContent = "Home";
footerLinks.append(footerLink1);

const footerLink2 = document.createElement("a");
footerLink2.classList.add("footer");
footerLink2.setAttribute("href", "#");
footerLink2.style.cssText = "font-weight: 500; padding: 12px 0;";
footerLink2.textContent = "Shop";
footerLinks.append(footerLink2);

const footerLink3 = document.createElement("a");
footerLink3.classList.add("footer");
footerLink3.setAttribute("href", "#");
footerLink3.style.cssText = "font-weight: 500; padding: 12px 0;";
footerLink3.textContent = "About";
footerLinks.append(footerLink3);

const footerLink4 = document.createElement("a");
footerLink4.classList.add("footer");
footerLink4.setAttribute("href", "#");
footerLink4.style.cssText = "font-weight: 500; padding: 12px 0;";
footerLink4.textContent = "Contact";
footerLinks.append(footerLink4);

const footerHelps = document.createElement("div");
footerHelps.style.cssText =
  "display: flex; align-items: flex-start; flex-direction: column; width: 20%;";
footerCon.append(footerHelps);

const footerHelpTitle = document.createElement("h4");
footerHelpTitle.style.cssText =
  "color: #9F9F9F; font-size: 18px; margin-top: 0; width: 100%; font-weight: 500;";
footerHelpTitle.textContent = "Help";
footerHelps.append(footerHelpTitle);

const footerHelp1 = document.createElement("a");
footerHelp1.classList.add("footer");
footerHelp1.setAttribute("href", "#");
footerHelp1.style.cssText = "font-weight: 500; padding: 12px 0;";
footerHelp1.textContent = "Payment Options";
footerHelps.append(footerHelp1);

const footerHelp2 = document.createElement("a");
footerHelp2.classList.add("footer");
footerHelp2.setAttribute("href", "#");
footerHelp2.style.cssText = "font-weight: 500; padding: 12px 0;";
footerHelp2.textContent = "Returns";
footerHelps.append(footerHelp2);

const footerHelp3 = document.createElement("a");
footerHelp3.classList.add("footer");
footerHelp3.setAttribute("href", "#");
footerHelp3.style.cssText = "font-weight: 500; padding: 12px 0;";
footerHelp3.textContent = "Privacy Policies";
footerHelps.append(footerHelp3);

const newsletterDiv = document.createElement("div");
footerCon.append(newsletterDiv);

const newsletter = document.createElement("h4");
newsletter.style.cssText =
  "color: #9F9F9F; font-size: 18px; margin-top: 0; font-weight: 500;";
newsletter.textContent = "Newslatter";
newsletterDiv.append(newsletter);

const form = document.createElement("form");
form.style.cssText =
  "display: flex; align-items: center; justify-content: flex-start; gap: 10px;";
newsletterDiv.append(form);

const input = document.createElement("input");
input.setAttribute("placeholder", "Enter Your Email Address");
input.style.cssText =
  "width: 200px; border: none; outline: none; color: #9F9F9F; font-size: 14px; font-weight: 400; padding: 7px 0; border-bottom: 1px solid black; background: white;";
form.append(input);

const submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.style.cssText =
  "border: none; outline: none; font-size: 14px; font-weight: 500; padding: 7px 0; border-bottom: 1px solid black; background: white;";
submit.setAttribute("value", "SUBSCRIBE");
form.append(submit);

const footers = document.querySelectorAll(".footer");
for (let i = 0; i < footers.length; i++) {
  footers[i].style.width = "100%";
}

function footerMobile() {
  if (window.innerWidth <= 767) {
    footerCon.style.textAlign = "center";
    footerLeft.style.width = "100%"
    footerLinks.style.width = "40%";
    footerLinks.style.textAlign = "center";
    footerHelps.style.width = "40%";
    footerHelps.style.textAlign = "center";
    newsletterDiv.style.marginTop = "20px";
    newsletterDiv.style.width = "100%";
    form.style.justifyContent = "center";
  } else {
    footerCon.style.textAlign = "left";
    footerLeft.style.width = "25%"
    footerLinks.style.width = "20%";
    footerLinks.style.textAlign = "left";
    footerHelps.style.textAlign = "left";
    footerHelps.style.width = "20%";
    newsletterDiv.style.marginTop = "0px";
    newsletterDiv.style.width = "fit-content";
    form.style.justifyContent = "flex-start";
  }
}
footerMobile();
window.addEventListener("resize", () => {
  footerMobile();
});
// End Footer
//////////////////////////////////////////////////////
let containers = document.querySelectorAll(".container");
function adjustContainerWidth() {
  for (let i = 0; i < containers.length; i++) {
    if (window.innerWidth <= 767) {
      containers[i].style.width = "97%";
    } else {
      containers[i].style.width = "92%";
    }
  }
}
adjustContainerWidth();
window.addEventListener("resize", () => {
  adjustContainerWidth();
});

let links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].style.textDecoration = "none";
  links[i].style.color = "black";
  links[i].style.display = "block";
}

logo.style.display = "flex"