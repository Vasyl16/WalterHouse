import { swiperMainLabel } from './swiper/mainSwiper';
import { addClasses } from './utils/addClasses';
import { removeClasses } from './utils/removeClasses';
import { blockScroll } from './utils/blockScroll';

const priceListItems = [
  {
    popupButtonClass: '.renovation-styles__style-button_services-vip',
    closeButtonClass: '.price-list__close-icon-wrapper_vip',
    classArray: [
      {
        class: '.price-list_vip',
        classNameActive: 'price-list_active'
      },
      {
        class: '.header',
        classNameActive: 'header-hide-full'
      },
      {
        class: '.left-panel',
        classNameActive: 'left-panel-hide'
      },
      {
        class: '.swiper-main__pagination',
        classNameActive: 'swiper-main__pagination-hide'
      }
    ]
  },
  {
    popupButtonClass: '.renovation-styles__style-button_services-elite',
    closeButtonClass: '.price-list__close-icon-wrapper_elite',
    classArray: [
      {
        class: '.price-list_elite',
        classNameActive: 'price-list_active'
      },
      {
        class: '.header',
        classNameActive: 'header-hide-full'
      },
      {
        class: '.left-panel',
        classNameActive: 'left-panel-hide'
      },
      {
        class: '.swiper-main__pagination',
        classNameActive: 'swiper-main__pagination-hide'
      }
    ]
  },
  {
    popupButtonClass: '.renovation-styles__style-button_services-extra',
    closeButtonClass: '.price-list__close-icon-wrapper_extra',
    classArray: [
      {
        class: '.price-list_extra',
        classNameActive: 'price-list_active'
      },
      {
        class: '.header',
        classNameActive: 'header-hide-full'
      },
      {
        class: '.left-panel',
        classNameActive: 'left-panel-hide'
      },
      {
        class: '.swiper-main__pagination',
        classNameActive: 'swiper-main__pagination-hide'
      }
    ]
  }
];

const removeAllClasses = () => {
  priceListItems.forEach(popupItemObj => {
    const classArray = popupItemObj.classArray;

    removeClasses(classArray);
  });
};

export const handleRenovationstylesServicesPopup = () => {
  priceListItems.forEach(popupItemObj => {
    const closeButton = document.querySelector(popupItemObj.closeButtonClass);
    const popupButton = document.querySelector(popupItemObj.popupButtonClass);
    const classArray = popupItemObj.classArray;

    const isValidPopupItemObj = closeButton && popupButton && classArray.length;

    if (!isValidPopupItemObj) {
      console.error('some element are missing in js or html');

      return;
    }

    const handleAddClases = () => {
      addClasses(classArray);

      swiperMainLabel.mousewheel.disable();

      // Disable touch controls
      swiperMainLabel.allowTouchMove = false;

      // Disable keyboard controls if enabled
      if (swiperMainLabel.keyboard) {
        swiperMainLabel.keyboard.disable();
      }

      blockScroll(true);
    };

    const handleRemoveClases = () => {
      removeClasses(classArray);

      blockScroll(false);

      swiperMainLabel.mousewheel.enable();
    };

    popupButton.addEventListener('click', handleAddClases);

    closeButton.addEventListener('click', handleRemoveClases);
  });

  window.addEventListener('resize', () => {
    removeAllClasses();
  });
};
