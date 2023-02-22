import Home from 'module/home/home-screen';

export const HOME_ROUTE_DATA = [
  // phần tử đầu tiên của mảng là route chính
  {
    name: 'Home',
    component: Home,
  },
];

export const SUB_HOME_ROUTE_NAMES = HOME_ROUTE_DATA.map(
  item => item.name,
).splice(1, HOME_ROUTE_DATA.length);
