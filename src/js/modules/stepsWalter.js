const stepsWalterCircleBulletClasesItems = [
  {
    bulletClass: 'steps-walter__circle-wrapper-bullet_leave-app',
    activeClass: 'steps-walter__items_leave-app-active'
  },
  {
    bulletClass: 'steps-walter__circle-wrapper-bullet_check',
    activeClass: 'steps-walter__items_check-active'
  },

  {
    bulletClass: 'steps-walter__circle-wrapper-bullet_draft',
    activeClass: 'steps-walter__items_draft-active'
  },
  {
    bulletClass: 'steps-walter__circle-wrapper-bullet_contract',
    activeClass: 'steps-walter__items_contract-active'
  },

  {
    bulletClass: 'steps-walter__circle-wrapper-bullet_work',
    activeClass: 'steps-walter__items_work-active'
  },

  {
    bulletClass: 'steps-walter__circle-wrapper-bullet_completion',
    activeClass: 'steps-walter__items_completion-active'
  }
];

const totalItems = stepsWalterCircleBulletClasesItems.length;
const startPositionAngle = 90; // top center

const StepsWalterItemsClass = 'steps-walter__items';

const stepCountClass = 'steps-walter__circle-step-text';

const stepActiveCircleLineClass = 'steps-walter__circle-active-line';

const stepActveCircleLineWrapperClass = 'steps-walter__circle-line-wrapper';

let currentIndex = 1;

const putStepsWalterCircleBulletsFun = (
  bulletItem,
  startPositionAngle,
  totalItems,
  index
) => {
  const angle = startPositionAngle + index * (360 / totalItems);

  const x = 50 - 50 * Math.cos((angle * Math.PI) / 180);
  const y = 50 - 50 * Math.sin((angle * Math.PI) / 180);

  bulletItem.style.position = 'absolute';
  bulletItem.style.left = `${x}%`;
  bulletItem.style.top = `${y}%`;

  return angle;
};

const setStepsWalterLine = (
  stepActiveCircleLineClass,
  stepActveCircleLineWrapperClass,
  index,
  startPositionAngle
) => {
  const stepActiveCircleLine = document.querySelector(
    '.' + stepActiveCircleLineClass
  );

  const stepActveCircleLineWrapper = document.querySelector(
    '.' + stepActveCircleLineWrapperClass
  );

  if (!stepActveCircleLineWrapper && !stepActiveCircleLine) {
    console.error('stepsWalterItems are missing');

    return;
  }

  const angle = startPositionAngle + index * (360 / totalItems);

  const stepActveCircleLineWrapperLength =
    stepActveCircleLineWrapper.getBoundingClientRect().width * 3.14;

  stepActiveCircleLine.style.strokeDashoffset =
    stepActveCircleLineWrapperLength -
    (stepActveCircleLineWrapperLength * (angle - 90)) / 360;
};

const changeStepFun = (
  bulletElement,
  classElement,
  classAdd,
  index,
  stepCount,
  stepActiveCircleLine,
  stepActveCircleLineWrapper
) => {
  bulletElement.addEventListener('click', () => {
    classElement.classList.forEach(className => {
      if (className.includes('-active')) {
        classElement.classList.remove(className);
      }
    });

    classElement.classList.add(classAdd);

    stepCount.textContent = index + 1;

    currentIndex = index;

    setStepsWalterLine(
      stepActiveCircleLine,
      stepActveCircleLineWrapper,
      index,
      startPositionAngle
    );
  });
};

const stepsWalterFun = () => {
  stepsWalterCircleBulletClasesItems.forEach(
    (stepsWalterCircleBulletsItemData, index) => {
      const { bulletClass, activeClass } = stepsWalterCircleBulletsItemData;

      const stepsWalterCircleBulletItem = document.querySelector(
        '.' + bulletClass
      );

      if (!stepsWalterCircleBulletItem) {
        console.error('some stepsWalterCircleBuletItem are missing');

        return;
      }

      putStepsWalterCircleBulletsFun(
        stepsWalterCircleBulletItem,
        startPositionAngle,
        totalItems,
        index
      );

      const stepsWalterItemsElement = document.querySelector(
        '.' + StepsWalterItemsClass
      );

      const stepCount = document.querySelector('.' + stepCountClass);

      if (!stepsWalterItemsElement && !stepCount) {
        console.error('stepsWalterItems are missing');

        return;
      }

      changeStepFun(
        stepsWalterCircleBulletItem,
        stepsWalterItemsElement,
        activeClass,
        index,
        stepCount,
        stepActiveCircleLineClass,
        stepActveCircleLineWrapperClass
      );
    }
  );
};

export const initStepsWalterFun = () => {
  stepsWalterFun();

  window.addEventListener('resize', () => {
    setStepsWalterLine(
      stepActiveCircleLineClass,
      stepActveCircleLineWrapperClass,
      currentIndex,
      startPositionAngle
    );
  });
};
