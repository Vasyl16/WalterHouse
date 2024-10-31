const changePackageHoverClassList = [
  {
    hoverElement: 'package-size-list-services__item_elite',
    activeElementClass: 'info-list-services_elite',
    activeClass: 'info-list-services_active'
  },
  {
    hoverElement: 'package-size-list-services__item_vip',
    activeElementClass: 'info-list-services_vip',
    activeClass: 'info-list-services_active'
  },
  {
    hoverElement: 'package-size-list-services__item_extra',
    activeElementClass: 'info-list-services_extra',
    activeClass: 'info-list-services_active'
  }
];

const maxWorkingWidth = 1024;

export const changePackageHoverFun = () => {
  const changePackageHoverPopup = (
    activeElementClass,
    activeClass,
    isHover
  ) => {
    if (document.documentElement.clientWidth <= maxWorkingWidth) {
      return;
    }

    const activeElement = document.querySelector('.' + activeElementClass);

    if (!activeElement) {
      console.error('active Element are missing');
      return;
    }

    if (isHover) {
      activeElement.classList.add(activeClass);
      return;
    }

    activeElement.classList.remove(activeClass);
  };

  changePackageHoverClassList.forEach(changePackageHoverClassData => {
    const { hoverElement, activeElementClass, activeClass } =
      changePackageHoverClassData;

    const changePackageHoverElement = document.querySelector(
      '.' + hoverElement
    );

    if (!changePackageHoverElement) {
      console.error('some elements are missing');

      return;
    }

    changePackageHoverElement.addEventListener('mouseenter', () =>
      changePackageHoverPopup(activeElementClass, activeClass, true)
    );

    changePackageHoverElement.addEventListener('mouseleave', () =>
      changePackageHoverPopup(activeElementClass, activeClass, false)
    );
  });
};
