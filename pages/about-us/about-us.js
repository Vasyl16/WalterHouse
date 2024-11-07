import '/src/scss/pages/about-us.scss';

import { burgerMenuFun, loadLazyImgs, setupNavigation } from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenuFun();
  loadLazyImgs();
  setupNavigation();
});
