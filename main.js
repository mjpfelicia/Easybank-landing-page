const btn = document.querySelector(".btn-menu");
const btnIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav-list");
const menuFundo = document.querySelector(".menu-fundo");
btn.addEventListener("click", toggleMenu);


function toggleMenu() {
  nav.classList.toggle("nav-list-hidden");
  menuFundo.classList.toggle("menu-hidden");
  
  if (nav.classList.contains("nav-list-hidden")) {
    btnIcon.src = "./images/icon-hamburger.svg";
  } else {
    btnIcon.src = "./images/icon-close.svg";
  }
  
}
