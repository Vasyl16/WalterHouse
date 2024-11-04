const infoListElements = document.querySelectorAll(
  '.package-size-list-services__package-wrapper'
);
const infoListClassActive =
  'package-size-list-services__package-wrapper_active';
const progressHandle = document.querySelector(
  '.list-services__progress-point-handle'
);
const angleDisplay = document.querySelector(
  '.list-services__circle-size-count'
);
const costDisplay = document.querySelector('.list-services__cost-count');
const circleProgress = document.querySelector(
  '.list-services__progress-circle'
);
const progressCircleWrapper = document.querySelector(
  '.list-services__circle-size-wrapper'
);
const maxDegrees = 360.9;
const minDegrees = 64;
let isDragging = false;
let angle = minDegrees;
const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

const formatNumber = num => {
  // Convert the number to a string
  const numStr = num.toString();

  // Check if the number has 5 or more characters
  if (numStr.length >= 5) {
    // Use regex to add spaces between thousands
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  // Return the number as is if it has less than 5 characters
  return numStr;
};

const changePackageType = () => {
  infoListElements.forEach(element => {
    element.addEventListener('click', () => {
      infoListElements.forEach(el => el.classList.remove(infoListClassActive));

      element.classList.add(infoListClassActive);

      const newValue =
        parseInt(element.getAttribute('data-value')) * angleDisplay.textContent;

      costDisplay.textContent = formatNumber(newValue);
    });
  });
};

const updateHandlePositionPoint = () => {
  const radians = (angle * Math.PI) / 180;
  const x = 50 + 50 * Math.cos(radians - Math.PI / 2);
  const y = 50 + 50 * Math.sin(radians - Math.PI / 2);

  progressHandle.style.left = `${x}%`;
  progressHandle.style.top = `${y}%`;
};

const updateHandlePosition = () => {
  updateHandlePositionPoint();

  // Get data-value from the active item and calculate cost
  const activeItem = document.querySelector('.' + infoListClassActive);

  const dataValue = activeItem
    ? parseInt(activeItem.getAttribute('data-value'))
    : 1;

  // Calculate cost based on angle and data-value

  const circleProgressWidth = circleProgress.getBoundingClientRect().width;

  const circleProgressWidthLength = circleProgressWidth * 3.14;

  angleDisplay.textContent = `${Math.round(angle)}`;
  const cost = Math.round(angle) * dataValue;

  costDisplay.textContent = formatNumber(cost); // Update the cost display

  circleProgress.style.strokeDashoffset =
    circleProgressWidthLength -
    (circleProgressWidthLength * Math.round(angle)) / 360;
};

const onMouseMove = event => {
  event.preventDefault();

  if (isDragging) {
    const container = progressHandle.parentElement.getBoundingClientRect();
    const centerX = container.left + container.width / 2;
    const centerY = container.top + container.height / 2;
    let deltaX;
    let deltaY;

    if (isTouchDevice()) {
      const touch = event.touches[0];
      deltaX = touch.clientX - centerX;
      deltaY = touch.clientY - centerY;
    } else {
      deltaX = event.clientX - centerX;
      deltaY = event.clientY - centerY;
    }

    // Calculate angle in degrees
    let newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
    if (newAngle < 0) newAngle += 360; // Normalize angle to positive values

    // Update angle only within minDegrees to maxDegrees range
    if (newAngle >= minDegrees && newAngle <= maxDegrees) {
      angle = newAngle;
      updateHandlePosition();
    } else {
      isDragging = false; // Stop dragging once maxDegrees is reached
      progressHandle.style.cursor = 'grab';
    }
  }
};

const stopDragging = () => {
  isDragging = false;
  progressHandle.style.cursor = 'grab';
};

const changePackageSize = () => {
  progressHandle.addEventListener('pointerdown', event => {
    event.stopPropagation();
  });

  if (isTouchDevice()) {
    progressHandle.addEventListener('touchstart', () => {
      if (angle >= minDegrees && angle <= maxDegrees) {
        isDragging = true;
      }

      progressCircleWrapper.addEventListener('touchmove', onMouseMove, {
        passive: false
      });
    });

    progressHandle.addEventListener('touchend', () => {
      isDragging = false;
      progressCircleWrapper.removeEventListener('touchmove', onMouseMove);
    });

    return;
  }

  progressHandle.addEventListener('mousedown', () => {
    if (angle >= minDegrees && angle <= maxDegrees) {
      isDragging = true;
      progressHandle.style.cursor = 'grabbing';
    }

    progressCircleWrapper.addEventListener('mousemove', onMouseMove);
    progressCircleWrapper.addEventListener('mouseup', stopDragging);
    progressCircleWrapper.addEventListener('mouseleave', stopDragging);
  });

  progressHandle.addEventListener('mouseup', () => {
    progressHandle.style.cursor = 'grab';

    progressCircleWrapper.removeEventListener('mousemove', onMouseMove);
    progressCircleWrapper.removeEventListener('mouseup', stopDragging);
    progressCircleWrapper.removeEventListener('mouseleave', stopDragging);
  });
};

export const changePackage = () => {
  const isValidHTMLElements =
    progressCircleWrapper &&
    circleProgress &&
    angleDisplay &&
    costDisplay &&
    progressHandle &&
    infoListElements &&
    costDisplay;

  if (!isValidHTMLElements) {
    console.error('some element are missing in changePackage fun');
    return;
  }

  changePackageSize();
  changePackageType();
  updateHandlePositionPoint();
  window.addEventListener('resize', updateHandlePosition);
};
