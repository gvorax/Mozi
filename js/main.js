// Swiper

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    767: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  slidesPerView: 1,
  //   loop: true,
});

// Navbar

const header = document.querySelector(".header"),
  navbar = document.querySelector(".header--navbar__nav"),
  openNavBtn = document.querySelector(".header .nav--icon i"),
closeNavBtn = document.querySelector(".header .close-btn");

// function closeMenuOnBodyClick(event){
//   // get the event path
//   const path = event.composedPath();
//   // check if it has the menu element
//   if (path.some(elem => elem.id === 'myMenuId')) {
//     // terminate this function if it does
//     return;
//   }
//   closeMenu();
// }
// function closeMenu(){
//   // add class to the menu to make it show
//   navbar.classList.remove('open-nav');
//   // add event listener to the html element
//   html.removeEventListener('click', closeMenuOnBodyClick);
// }

// function openMenu(){
//   // add class to the menu to make it show
//   navbar.classList.add('open-nav');
//   // add event listener to the html element
//   html.addEventListener('click', closeMenuOnBodyClick);
// }







window.addEventListener("scroll", () => {
  header.classList.toggle("on-scroll", window.scrollY > 0);
});

function openNav(btn) {
  btn.addEventListener("click", (e) => {
    navbar.classList.add("open-nav");
  });
}

function closeNav(btn) {
  btn.addEventListener("click", (e) => {
    navbar.classList.remove("open-nav");
  });
}

openNav(openNavBtn);
closeNav(closeNavBtn);

window.addEventListener("click", (e) => {
  if (e.target !== navbar && e.target !== openNavBtn) {
    navbar.classList.remove("open-nav");
  }
});
