const additionalServicesAllPopupItems = [
  {
    popupButtonClass: '.additional-services__image-container_video',
    closeButtonClass: '.additional-services-popup__close-button-video',
    maxHeight: false,
    maxWidth: 1024,
    classArray: [
      {
        class: '.additional-services-popup-video',
        classNameActive: 'additional-services-popup-active'
      }
    ]
  },
  {
    popupButtonClass: '.additional-services__image-container_broadcast',
    closeButtonClass: '.additional-services-popup__close-button-broadcast',
    maxHeight: false,
    maxWidth: 1024,
    classArray: [
      {
        class: '.additional-services-popup-broadcast',
        classNameActive: 'additional-services-popup-active'
      }
    ]
  },
  {
    popupButtonClass: '.additional-services__image-container_furniture',
    closeButtonClass: '.additional-services-popup__close-button-furniture',
    maxHeight: false,
    maxWidth: 1024,
    classArray: [
      {
        class: '.additional-services-popup-furniture',
        classNameActive: 'additional-services-popup-active'
      }
    ]
  },
  {
    popupButtonClass: '.additional-services__image-container_household',
    closeButtonClass: '.additional-services-popup__close-button-household',
    maxHeight: false,
    maxWidth: 1024,
    classArray: [
      {
        class: '.additional-services-popup-household',
        classNameActive: 'additional-services-popup-active'
      }
    ]
  },
  {
    popupButtonClass: '.additional-services__image-container_ultra',
    closeButtonClass: '.additional-services-popup__close-button-ultra',
    maxHeight: false,
    maxWidth: 1024,
    classArray: [
      {
        class: '.additional-services-popup-ultra',
        classNameActive: 'additional-services-popup-active'
      }
    ]
  }
];

const infoListServicesPopupsItems = [
  {
    popupButtonClass: '.package-size-list-services__info-icon_elite',
    closeButtonClass: '.info-list-services__close-button-icon_elite',
    maxHeight: false,
    maxWidth: 1024,
    classArray: [
      {
        class: '.info-list-services_elite',
        classNameActive: 'info-list-services_active'
      }
    ]
  },
  {
    popupButtonClass: '.package-size-list-services__info-icon_vip',
    closeButtonClass: '.info-list-services__close-button-icon_vip',
    maxHeight: false,
    maxWidth: 1024,
    classArray: [
      {
        class: '.info-list-services_vip',
        classNameActive: 'info-list-services_active'
      }
    ]
  },
  {
    popupButtonClass: '.package-size-list-services__info-icon_extra',
    closeButtonClass: '.info-list-services__close-button-icon_extra',
    maxHeight: false,
    maxWidth: 1024,
    classArray: [
      {
        class: '.info-list-services_extra',
        classNameActive: 'info-list-services_active'
      }
    ]
  }
];

export const allHomePopupItems = [
  ...additionalServicesAllPopupItems,
  ...infoListServicesPopupsItems
];
