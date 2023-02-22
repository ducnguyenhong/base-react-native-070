import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'module/auth/login';
import { memo, useMemo } from 'react';
import { navigationScreenOptions } from 'utils/helper';

const PublicRoute = () => {
  const Stack = createNativeStackNavigator();

  const ROUTE_DATA = useMemo(
    () => [
      {
        name: 'Login',
        component: Login,
      },
    ],
    [],
  );

  return (
    <Stack.Navigator
      initialRouteName="LoginIVnd"
      screenOptions={navigationScreenOptions}>
      {ROUTE_DATA.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default memo(PublicRoute);
