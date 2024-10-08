const infoListElements = document.querySelectorAll(
  '.package-size-list-services__item'
);
const infoListClassActive = 'package-size-list-services__item_active';
const costInfoElement = document.querySelector('.list-services__cost');

export const changePackage = () => {
  if (!infoListElements) {
    console.error(
      'info-list-services__title elemensts or list-services__cost are missing'
    );

    return;
  }

  infoListElements.forEach(element => {
    element.addEventListener('click', () => {
      infoListElements.forEach(el => el.classList.remove(infoListClassActive));

      element.classList.add(infoListClassActive);

      const newValue = element.getAttribute('data-value');

      costInfoElement.textContent = newValue;
    });
  });
};
