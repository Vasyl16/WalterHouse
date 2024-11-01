import '/src/scss/pages/home.scss';

import {
  burgerMenuFun,
  initSwiperMainLabel,
  changePackage,
  toggleAllHomePopupFun,
  loadLazyImgs,
  renovationStylesPopupFun,
  changePackageHoverFun,
  initStepsWalterFun
} from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenuFun();
  initSwiperMainLabel();
  changePackage();
  toggleAllHomePopupFun();
  loadLazyImgs();
  renovationStylesPopupFun();
  changePackageHoverFun();
  initStepsWalterFun();
});
