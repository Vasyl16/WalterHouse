export const hideHeader = ifHideHeader => {
  const header = document.querySelector('.header');

  ifHideHeader
    ? header.classList.add('header-hide')
    : header.classList.remove('header-hide');
};
