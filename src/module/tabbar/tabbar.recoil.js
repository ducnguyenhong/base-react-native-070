import { atom } from 'recoil';

export const currentTabBarAtom = atom({
  key: 'CURRENT_TAB_BAR_ATOM',
  default: 'HomeStack',
});
