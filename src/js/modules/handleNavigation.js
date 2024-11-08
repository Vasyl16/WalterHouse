import { burgerItems, toogleClasses } from './burger';
import { swiperMainLabel } from './swiper/mainSwiper';
import { blockScroll } from './utils/blockScroll';

// Define navigation items with additional properties for location matching
const navigationItems = [
  {
    linkClass: 'header__item_logo',
    hideClassesItems: false,
    locationPath: '/WalterHouse/'
  },
  {
    linkClass: 'nav-item-burger-header__link',
    hideClassesItems: burgerItems,
    location: window.location.pathname,
    locationPath: '/WalterHouse/'
  }
];

const header = document.querySelector('.header');
const headerHeight = header ? header.offsetHeight : 0;

const navigateSwiperFun = (swiperMainLabel, slideIndex) => {
  if (swiperMainLabel && typeof swiperMainLabel.slideTo === 'function') {
    swiperMainLabel.slideTo(slideIndex);
    return;
  }
};

const navigateManualFun = targetElement => {
  if (targetElement) {
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    return;
  }
};

const navigationFun = () => {
  navigationItems.forEach(({ linkClass, hideClassesItems, locationPath }) => {
    const navLinks = document.querySelectorAll(`.${linkClass}`);

    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();

        const slideIndex = parseInt(link.getAttribute('data-slide-index'), 10);
        const targetSelector = link.getAttribute('href').replace('#', '.');

        blockScroll(false);

        if (window.location.pathname !== locationPath) {
          const newLocation = `${locationPath}?section=${targetSelector}&slide=${slideIndex}`;

          window.location.href = newLocation;
          return;
        }

        const targetElement = document.querySelector(targetSelector);

        if (hideClassesItems.length) {
          toogleClasses(hideClassesItems);
        }

        if (swiperMainLabel) {
          navigateSwiperFun(swiperMainLabel, slideIndex);
          return;
        }

        if (targetElement) {
          navigateManualFun(targetElement);
          return;
        }

        console.error(
          `Target element with selector ${targetSelector} not found.`
        );
      });
    });
  });
};

const navigationViaLocPath = () => {
  const urlObj = new URL(window.location.href);
  const targetClass = urlObj.searchParams.get('section');
  const slideIndex = urlObj.searchParams.get('slide');

  if (!targetClass || !slideIndex) {
    return;
  }

  const targetElement = document.querySelector(targetClass);

  if (swiperMainLabel) {
    navigateSwiperFun(swiperMainLabel, slideIndex);
    return;
  }

  if (targetElement) {
    navigateManualFun(targetElement);
    return;
  }
};

export const setupNavigation = () => {
  navigationFun();
  navigationViaLocPath();
};
