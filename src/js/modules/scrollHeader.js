const header = document.querySelector('.header');
const headerActiveClass = 'header_scroll';
let debounceTimeout;

const onScrollEnd = () => {
  const currentScrollY = window.scrollY;

  currentScrollY > 0
    ? header.classList.add(headerActiveClass)
    : header.classList.remove(headerActiveClass);
};

export const handleHeaderScroll = () => {
  window.addEventListener('scroll', () => {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      requestAnimationFrame(onScrollEnd);
    }, 30);
  });
};
