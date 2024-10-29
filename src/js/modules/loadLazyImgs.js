const lazyImgs = document.querySelectorAll('.lazy-loading-img-wrapper');
const lazyImgWrapperLoadedClass = 'lazy-loading-img-wrapper-loaded';
const lazyImgClass = 'lazy-loading-img';

export const loadLazyImgs = () => {
  lazyImgs.forEach(lazyImgWrapper => {
    const lazyImg = lazyImgWrapper.querySelector('.' + lazyImgClass);

    const loadedImgFun = () => {
      lazyImgWrapper.classList.add(lazyImgWrapperLoadedClass);
    };

    if (lazyImg.complete) {
      loadedImgFun();
      return;
    }

    lazyImg.addEventListener('load', loadedImgFun);
  });
};
