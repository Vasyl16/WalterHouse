export const addClasses = classArray => {
  classArray.forEach(obj => {
    const element = document.querySelector(obj.class);
    if (!element) {
      console.error('some element are missing');
      return;
    }

    element.classList.add(obj.classNameActive);
  });
};
