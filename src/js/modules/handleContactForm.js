import { validateInputFun } from './utils/validateInputFun';

const contactFormButton = 'contact-form__button';
const contactForm = 'contact-form__body';

const contactInputPhoneWrapper = 'contact-form__item_phone';
const contactInputNameWrapper = 'contact-form__item_name';

const contactInputWrapperErrorClass = 'contact-form__item_error';

const contactInput = 'contact-form__input';

const contactErrorText = 'contact-form__input-error-text';

export const handleContactFormFun = () => {
  const contactFormButtons = document.querySelectorAll('.' + contactFormButton);

  if (!contactFormButtons.length) {
    console.error('No form buttons found');

    return;
  }

  contactFormButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();

      const form = button.closest('.' + contactForm);

      if (!form) {
        console.error('Form not found');
        return;
      }

      const nameWrapper = form.querySelector('.' + contactInputNameWrapper);
      const phoneWrapper = form.querySelector('.' + contactInputPhoneWrapper);

      if (!nameWrapper || !phoneWrapper) {
        console.error('Name or phone wrapper not found');
        return;
      }

      const popupInputData = [
        {
          inputParentErrorClass: contactInputWrapperErrorClass,
          errorMessageClass: contactErrorText,
          inputParentElement: nameWrapper,
          inputClass: contactInput,
          type: 'name'
        },
        {
          inputParentErrorClass: contactInputWrapperErrorClass,
          errorMessageClass: contactErrorText,
          inputParentElement: phoneWrapper,
          inputClass: contactInput,
          type: 'phone'
        }
      ];

      const isValid = validateInputFun(popupInputData);

      if (!isValid) {
        return;
      }
    });
  });
};
