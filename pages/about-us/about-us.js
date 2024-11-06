import '/src/scss/pages/about-us.scss';

import { burgerMenuFun, loadLazyImgs } from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenuFun();
  loadLazyImgs();
});
