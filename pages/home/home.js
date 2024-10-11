import '/src/scss/pages/home.scss';

import {
  burgerMenuFun,
  initSwiperMainLabel,
  changePackage,
  toggleAllHomePopupFun
} from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenuFun();
  initSwiperMainLabel();
  changePackage();
  toggleAllHomePopupFun();
});
