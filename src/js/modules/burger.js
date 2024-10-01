import { blockScroll } from './blockScroll';

const burger = document.querySelector('.header__burger-icon');
const headerItems = document.querySelector('.item-burger-header');
const headerItemsActiveClass = 'item-burger-header_active';

const burgerItems = [
  {
    item: headerItems,
    itemClassActive: headerItemsActiveClass
  }
];

const toogleClasses = items => {
  try {
    items.forEach(itemObj => {
      itemObj.item.classList.toggle(itemObj.itemClassActive);
    });
  } catch (error) {
    console.error('some element is not valid', error.message);
  }
};

const toggleBurgerMenu = () => {
  const body = document.body;

  body.classList.contains('block-scroll')
    ? blockScroll(false)
    : blockScroll(true);

  toogleClasses(burgerItems);
};

export const burgerMenuFun = () => {
  burger.addEventListener('click', toggleBurgerMenu);
};
