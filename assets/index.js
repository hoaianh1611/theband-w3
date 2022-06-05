const buyBtns = document.querySelectorAll(".js-buy-tickets");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

function showBuyTicket() {
  modal.classList.add("open");
}
function hideBuyTickets() {
  modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTicket);
}

modalClose.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Open Menu Mobile
let header = document.getElementById("header");
let mobileMenu = document.querySelector(".mobile-menu-btn");
let currentHeaderHeight = header.clientHeight;

mobileMenu.onclick = function () {
  if (header.clientHeight === currentHeaderHeight) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

//Close automically when click on menu items
let menuItems = document.querySelectorAll('#nav li a[href*="#"]');

console.log(menuItems);
for (let i = 0; i < menuItems.length; i++) {
  let menuItem = menuItems[i];

  menuItem.onclick = function () {
    let isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("sub-nav");

    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
