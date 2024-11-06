import { addClasses } from './utils/addClasses';
import { blockScroll } from './utils/blockScroll';
import { removeClasses } from './utils/removeClasses';
import { validateInputFun } from './utils/validateInputFun';

const headerOrderCallPopupButtons = [
  '.call-header__call-icon-container',
  '.call-header__text'
];

const headerOrderCallPopupButtonsActiveClass = [
  {
    class: '.call-header__call-icon-container',
    classNameActive: 'call-header__call-icon-container_active'
  },
  {
    class: '.call-header__text',
    classNameActive: 'call-header__text_active'
  }
];

const headerHidePopupHideItems = [
  {
    class: '.call-header__number',
    classNameActive: 'call-header__number_hide'
  },
  {
    class: '.header__burger-icon',
    classNameActive: 'header__burger-icon_hide'
  }
];

const headerOrderCallPopupClasses = [
  {
    class: '.header-order-call-popup',
    classNameActive: 'header-order-call-popup_active'
  }
];

const headerOrderCallAcceptedPopuppClasses = [
  {
    class: '.header-order-call-accepted-popup',
    classNameActive: 'header-order-call-accepted-popup_active'
  }
];

const allHeaderOrderCallPopupClasses = [
  ...headerOrderCallPopupButtonsActiveClass,
  ...headerOrderCallPopupClasses,
  ...headerHidePopupHideItems
];

const allHeaderOrderCallPopupAndAcceptedClasses = [
  ...headerOrderCallPopupButtonsActiveClass,
  ...headerOrderCallPopupClasses,
  ...headerOrderCallAcceptedPopuppClasses,
  ...headerHidePopupHideItems
];

const allHeaderOrderCallPopupAcceptedClasses = [
  ...headerOrderCallPopupButtonsActiveClass,
  ...headerOrderCallAcceptedPopuppClasses,
  ...headerHidePopupHideItems
];

const activeClass = 'active';

const headerOrderCallConfirmButton = '.form-order-call-popup__button';

const headerOrderCallAcceptedButton =
  '.header-order-call-accepted-popup__button';

const nameInputPopupClass = 'form-order-call-popup__input_name';
const phoneInputPopupClass = 'form-order-call-popup__input_phone';

const nameParentInputPopupElement = document.querySelector(
  '.form-order-call-popup__item_name'
);
const phoneParentInputPopupElement = document.querySelector(
  '.form-order-call-popup__item_phone'
);

const nameInputErrorPopupClass = 'form-order-call-popup__error-text_name';
const phoneInputErrorPopupClass = 'form-order-call-popup__error-text_phone';

const inputParentErrorClass = 'form-order-call-popup__item_error';

const popupInputData = [
  {
    inputParentErrorClass,
    errorMessageClass: nameInputErrorPopupClass,
    inputParentElement: nameParentInputPopupElement,
    inputClass: nameInputPopupClass,
    type: 'name'
  },
  {
    inputParentErrorClass,
    errorMessageClass: phoneInputErrorPopupClass,
    inputParentElement: phoneParentInputPopupElement,
    inputClass: phoneInputPopupClass,
    type: 'phone'
  }
];

const handleHeaderOrderCallPopup = () => {
  headerOrderCallPopupButtons.forEach(headerOrderCallPopupButton => {
    const headerOrderCallPopupButtonsElement = document.querySelector(
      headerOrderCallPopupButton
    );

    if (!headerOrderCallPopupButtonsElement) {
      console.error('popup button are missing');

      return;
    }

    const handleHeaderOrderButtonClick = () => {
      headerOrderCallPopupButtonsElement.classList.forEach(className => {
        if (className.includes(activeClass)) {
          blockScroll(false);
          removeClasses(allHeaderOrderCallPopupAndAcceptedClasses);

          return;
        }

        blockScroll(true);
        addClasses(allHeaderOrderCallPopupClasses);
      });
    };

    headerOrderCallPopupButtonsElement.addEventListener(
      'click',
      handleHeaderOrderButtonClick
    );
  });
};

const handleHeaderOrderCallAcceptedPopup = () => {
  const headerOrderCallConfirmButtonElement = document.querySelector(
    headerOrderCallConfirmButton
  );

  const headerOrderCallAcceptedButtonElement = document.querySelector(
    headerOrderCallAcceptedButton
  );

  if (!headerOrderCallConfirmButtonElement && !headerOrderCallAcceptedButton) {
    console.error(
      'headerOrderCallConfirmButton or headerOrderCallAcceptedButton are missing'
    );
    return;
  }

  headerOrderCallConfirmButtonElement.addEventListener('click', e => {
    e.preventDefault();

    if (validateInputFun(popupInputData)) {
      removeClasses(headerOrderCallPopupClasses);
      addClasses(headerOrderCallAcceptedPopuppClasses);
    }
  });

  headerOrderCallAcceptedButtonElement.addEventListener('click', () => {
    removeClasses(allHeaderOrderCallPopupAcceptedClasses);
  });
};

export const handleHeaderOrderCallAllPopupups = () => {
  handleHeaderOrderCallPopup();
  handleHeaderOrderCallAcceptedPopup();
};
