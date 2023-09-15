const menuBtn = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list-active');
});

// //popup
// Fancybox.bind("[data-fancybox]", {
// });

// const linkVideo = document.querySelector('.reviews__wrapper-video');
// const videoPopup = document.querySelector('.video-popup');
// const popupClose = document.querySelector('.popup-close');

// linkVideo.onclick = function() {
//   videoPopup.style.display = 'block';
// };

const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});

const swiperTime = new Swiper(".timelineSwiper", {
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 132,
    }
  }
});

const swiperCase = new Swiper('.case-swiper', {
  loop: true,
  slidesPerView: "auto",
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

    
