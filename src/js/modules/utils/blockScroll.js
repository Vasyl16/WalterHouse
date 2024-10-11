export const blockScroll = ifBlockScroll => {
  const body = document.body;
  const wrapper = document.querySelector('.wrapper');
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger-icon');

  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  if (ifBlockScroll) {
    body.classList.add('block-scroll');

    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    wrapper.style.marginRight = `${scrollbarWidth}px`;
    burger.style.marginRight = `${scrollbarWidth}px`;
    header.style.width = `calc(100% - ${scrollbarWidth}px)`;

    return;
  }

  body.classList.remove('block-scroll');

  if (!window.matchMedia('(pointer: fine)').matches) {
    return;
  }

  wrapper.style.marginRight = '';
  burger.style.marginRight = '';
  header.style.width = '';
};
