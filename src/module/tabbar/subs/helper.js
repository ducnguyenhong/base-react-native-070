import IconBackScreen from 'assets/images/icon-back-screen.png';
import Text from 'component/text';
import { Image } from 'react-native';
import IconHomeActive from '../images/icon-home-active.png';
import IconHome from '../images/icon-home.png';
import { styles } from '../tabbar.style';

const getTabBarData = routeName => {
  const tabBarData = {
    HomeStack: {
      icon: IconHome,
      activeIcon: IconHomeActive,
      label: 'Trang chủ',
    },
    DucTest: {
      icon: IconHome,
      activeIcon: IconHomeActive,
      label: 'DucTest',
    },
    default: {
      icon: IconHome,
      activeIcon: IconHomeActive,
      label: '',
    },
  };

  return tabBarData[routeName] || tabBarData.default;
};

export const screenOptions = ({ route }) => {
  const { icon, activeIcon, label } = getTabBarData(route.name);

  return {
    tabBarIcon: ({ focused }) => <Image source={focused ? activeIcon : icon} />,
    tabBarLabel: ({ focused }) => (
      <Text style={[focused ? styles.tTabbarTitleActive : styles.tTabbarTitle]}>
        {label}
      </Text>
    ),
    tabBarStyle: styles.tabBarStyle,
    headerBackImageSource: IconBackScreen,
  };
};
