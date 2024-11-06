const validationTypes = {
  name: value => /^[a-zA-Z\s]{2,}$/.test(value.trim()),
  phone: value => /^\d{10}$/.test(value.trim())
};

const errorMessages = {
  name: 'Please enter a valid name (at least 2 letters).',
  phone: 'Please enter a valid 10-digit phone number.'
};

export const validateInputFun = fields => {
  let allValid = true;

  fields.forEach(field => {
    const parent = field.inputParentElement;
    if (!parent) {
      console.error('Parent element is missing');
      allValid = false;
      return;
    }

    const element = parent.querySelector(`.${field.inputClass}`);
    const errorElement = parent.querySelector(`.${field.errorMessageClass}`);
    const isExistAllElements = element && errorElement;

    if (!isExistAllElements) {
      console.error('Input or error element is missing');
      allValid = false;
      return;
    }

    const isValid = validationTypes[field.type](element.value);

    if (!isValid) {
      parent.classList.add(field.inputParentErrorClass);
      errorElement.textContent = errorMessages[field.type];
      allValid = false;
    } else {
      parent.classList.remove(field.inputParentErrorClass);
      errorElement.textContent = 'valid';
    }
  });

  return allValid;
};
