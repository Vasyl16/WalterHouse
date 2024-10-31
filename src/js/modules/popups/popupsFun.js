import { blockScroll } from '../utils/blockScroll';
import { hideHeader } from '../utils/hideHeader';

const wrapper = document.querySelector('.wrapper');

export const togglePopupFun = popupItems => {
  popupItems.forEach(popupItemObj => {
    const closeButton = document.querySelector(popupItemObj.closeButtonClass);
    const popupButton = document.querySelector(popupItemObj.popupButtonClass);
    const classArray = popupItemObj.classArray;
    const maxHeight = popupItemObj.maxHeight || Infinity;
    const maxWidth = popupItemObj.maxWidth || Infinity;

    const isValidPopupItemObj = closeButton && popupButton;

    if (!isValidPopupItemObj) {
      console.error('some element are missing in js or html');

      return;
    }

    const shouldActivatePopup = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      return viewportWidth <= maxWidth && viewportHeight <= maxHeight;
    };

    const addClasses = classArray => {
      classArray.forEach(obj => {
        const element = document.querySelector(obj.class);
        if (element) {
          element.classList.add(obj.classNameActive);
        }
      });
    };

    const removeOtherClases = popupButton => {
      popupItems.forEach(popupItemObj => {
        if (
          popupButton !== document.querySelector(popupItemObj.popupButtonClass)
        ) {
          removeClasses(popupItemObj.classArray);
        }
      });
    };

    const removeClasses = classArray => {
      classArray.forEach(obj => {
        const element = document.querySelector(obj.class);
        if (element) {
          element.classList.remove(obj.classNameActive);
        }
      });
    };

    const handleAddClases = () => {
      wrapper.classList.add('wrapper-active');

      addClasses(classArray);

      removeOtherClases(popupButton);

      if (window.innerWidth <= 1024) {
        blockScroll(true);

        hideHeader(true);
      }
    };

    const handleRemoveClases = () => {
      removeClasses(classArray);

      wrapper.classList.remove('wrapper-active');

      if (window.innerWidth <= 1024) {
        blockScroll(false);

        hideHeader(false);
      }
    };

    const clearEvents = () => {
      popupButton.removeEventListener('click', handleAddClases);
      closeButton.removeEventListener('click', handleRemoveClases);
    };

    const addEvents = () => {
      try {
        popupButton.addEventListener('click', handleAddClases);

        closeButton.addEventListener('click', handleRemoveClases);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (shouldActivatePopup()) {
      addEvents();
    }

    window.addEventListener('resize', () => {
      if (shouldActivatePopup) {
        clearEvents();
        blockScroll(
          window.innerWidth <= 1024 &&
            wrapper.classList.contains('wrapper-active')
        );
        addEvents();
        hideHeader(
          window.innerWidth <= 1024 &&
            wrapper.classList.contains('wrapper-active')
        );
      }
    });
  });
};
