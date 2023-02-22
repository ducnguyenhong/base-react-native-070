import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import DucTestScreen from 'module/duc-test';
import HomeStackScreen from 'module/home';
import { SUB_HOME_ROUTE_NAMES } from 'module/home/subs/home.data';
import { memo, useCallback, useMemo } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSetRecoilState } from 'recoil';
import { screenOptions } from './subs/helper';
import { currentTabBarAtom } from './tabbar.recoil';
import { styles } from './tabbar.style';

const TabBar = () => {
  const Tab = createBottomTabNavigator();
  const setCurrentTabBar = useSetRecoilState(currentTabBarAtom);
  const SUB_ROUTES = useMemo(() => [...SUB_HOME_ROUTE_NAMES], []);

  const getTabScreenOptions = useCallback(
    ({ navigation, route }) => {
      if (navigation?.isFocused()) {
        setTimeout(() => setCurrentTabBar(route.name), 1000);
      }
      const routeName = getFocusedRouteNameFromRoute(route);
      const isSubRoute = SUB_ROUTES.includes(routeName);
      const heightIOS = isSubRoute ? 0 : 56;
      return {
        headerShown: false,
        tabBarStyle: {
          display: isSubRoute ? 'none' : 'flex',
          paddingBottom: 5,
          height: Platform.OS === 'ios' ? heightIOS : 56,
          paddingTop: 5,
          position: 'absolute',
        },
      };
    },
    [SUB_ROUTES, setCurrentTabBar],
  );

  const ARR_TAB_STACK = useMemo(
    () => [
      {
        name: 'HomeStack',
        component: HomeStackScreen,
        options: getTabScreenOptions,
      },
      {
        name: 'DucTest',
        component: DucTestScreen,
        options: getTabScreenOptions,
      },
    ],
    [getTabScreenOptions],
  );

  return (
    <SafeAreaView style={styles.savMain}>
      <Tab.Navigator initialRouteName="HomeStack" screenOptions={screenOptions}>
        {ARR_TAB_STACK.map(item => {
          const { name, component, initialParams, options } = item;
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={options}
              initialParams={initialParams}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default memo(TabBar);
