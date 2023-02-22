import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconBackScreen from 'assets/images/icon-back-screen.png';
import ErrorScreen from 'component/error-screen';
import LoadingScreen from 'component/loading-screen';
import Tabbar from 'module/tabbar';
import { memo, useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { useSetUserInfo } from 'utils/hook';
import { OTHER_ROUTES } from './subs/other.route';
import { useQueryUserInfo } from './subs/private-route.query';

const PrivateRoute = () => {
  const Stack = createNativeStackNavigator();
  const COMMON_ROUTES = useMemo(() => [...OTHER_ROUTES], []);
  const { data: userInfo, isLoading: loadingUserInfo } = useQueryUserInfo();

  useSetUserInfo(userInfo);

  if (loadingUserInfo) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LoadingScreen />
      </SafeAreaView>
    );
  }

  if (!userInfo) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ErrorScreen />
      </SafeAreaView>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerBackImageSource: IconBackScreen,
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Tabbar} />

      {COMMON_ROUTES.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default memo(PrivateRoute);
