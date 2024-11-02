import { allHomePopupItems } from './pages/home';
import { togglePopupFun } from './popupsFun';

export const toggleAllHomePopupFun = () => {
  togglePopupFun(allHomePopupItems);
};
