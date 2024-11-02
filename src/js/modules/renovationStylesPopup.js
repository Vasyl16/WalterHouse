const hoverElements = document.querySelectorAll('.renovation-styles__item');
const contentElementClass = 'renovation-styles__column_hidden';
const workingWidth = 1024;

export const renovationStylesPopupFun = () => {
  const handleHoverRenovationPopup = (hoverElement, isHover) => {
    if (document.documentElement.clientWidth > workingWidth) {
      return;
    }

    const contentElement = hoverElement.querySelector(
      '.' + contentElementClass
    );

    if (isHover) {
      contentElement.style.maxHeight = hoverElement.scrollHeight + 'px';

      return;
    }

    contentElement.style.maxHeight = 0;
  };

  hoverElements.forEach(hoverElement => {
    hoverElement.addEventListener('mouseenter', () =>
      handleHoverRenovationPopup(hoverElement, true)
    );

    hoverElement.addEventListener('mouseleave', () =>
      handleHoverRenovationPopup(hoverElement, false)
    );
  });
};
