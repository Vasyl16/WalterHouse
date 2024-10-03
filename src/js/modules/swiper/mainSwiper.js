import Swiper from 'swiper/bundle';

// swiper main vars
const swiperMain = '.swiper-main';
const swiperMainPagination = '.swiper-main__pagination';
let swiperMainLabel;

// config swiper main
// const swiperMainLabelFun = () => {
//   const screenWidth = window.innerWidth;

//   if (screenWidth > 1024 && !swiperMainLabel) {
//     swiperMainLabel = new Swiper(swiperMain, {
//       direction: 'vertical',
//       slidesPerView: 1,
//       spaceBetween: 0,
//       mousewheel: true,
//       speed: 1000,
//       pagination: {
//         el: swiperMainPagination, // Pagination container
//         clickable: true, // Make bullets clickable
//         bulletClass: 'swiper-bullet', // Custom bullet class
//         bulletActiveClass: 'swiper-bullet-active' // Custom active class
//       }
//     });
//   }

//   if (screenWidth <= 1024 && swiperMainLabel) {
//     swiperMainLabel.destroy(true, true);
//     swiperMainLabel = undefined;
//   }
// };

export const initSwiperMainLabel = () => {
  if (document.querySelector(swiperMain)) {
    swiperMainLabelFun();

    // Dynamically check for screen resizing and re-initialize or destroy the Swiper
    window.addEventListener('resize', () => {
      swiperMainLabelFun();
    });
  }
};
