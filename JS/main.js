// !Start Body Sytling
document.body.style.margin = 0;
// !End Body Sytling

// ?Start Container
let Container = document.createElement("div");
Container.style.width = "100%";
Container.style.height = "100vh";
Container.style.display = "flex";
Container.style.flexDirection = "column";
document.body.appendChild(Container);
// ?End Container

// *Start Header
let header = document.createElement("header");
header.style.width = "100%";
header.style.height = "54px";

header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";

let div = document.createElement("div");
let titleText = document.createTextNode("Youcef");
div.style.color = "#24ab6c";
div.style.fontWeight = "bold";
div.style.fontSize = "22px";
div.style.marginLeft = "15px";
div.style.cursor = "pointer";
div.appendChild(titleText);
header.appendChild(div);

let list = document.createElement("ul");
list.style.listStyle = "none";
list.style.color = "#777";
list.style.display = "flex";
list.style.margin = "0 15px 0 0";

let nav = ["Home", "About", "Service", "Contact"];
for (i = 0; i < 4; i++) {
  let li = document.createElement("li");
  li.style.marginLeft = "5px";
  li.style.cursor = "pointer";
  let liText = document.createTextNode(nav[i]);
  li.appendChild(liText);
  list.appendChild(li);
}

div.after(list);
Container.appendChild(header);
// *End Header

// ?Start Content
let content = document.createElement("div");
content.style.width = "calc(100% -10px)";
content.style.backgroundColor = "#ebebeb";
content.style.height = "calc(100vh - 110px)";
content.style.padding = "15px";
content.style.display = "grid";
content.style.gridTemplateColumns = "repeat(auto-fill,minmax(350px,1fr))";
content.style.gap = "15px";

for (i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.style.backgroundColor = "white";
  product.style.display = "flex";
  product.style.justifyContent = "center";
  product.style.alignItems = "center";
  product.style.flexDirection = "column";

  let nbrDiv = document.createElement("div");
  nbrDiv.style.fontSize = "32px";
  nbrDiv.style.marginBottom = "5px";
  let nbrText = document.createTextNode(i + 1);

    let productDiv = document.createElement("div");
    productDiv.style.fontSize = "13px"
    productDiv.style.color = "#777"
  let productText = document.createTextNode("Product");

  nbrDiv.appendChild(nbrText);
  productDiv.appendChild(productText);
  product.appendChild(nbrDiv);
  product.appendChild(productDiv);
  content.appendChild(product);
}

Container.appendChild(content);
// ?Start Content

// !Start Footer
let footer = document.createElement("footer");
footer.style.width = "100%";
footer.style.height = "48px";
footer.style.backgroundColor = "#23a86f";
footer.style.color = "white";
footer.style.fontSize = "18px";
footer.style.fontWeight = "600";
footer.style.justifySelf = "flex-end";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";

let footerText = document.createTextNode("Copyright 2023");

footer.appendChild(footerText);
Container.appendChild(footer);
// !End Footer
