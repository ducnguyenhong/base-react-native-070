import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { memo } from 'react';
import { HOME_ROUTE_DATA } from './subs/home.data';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      {HOME_ROUTE_DATA.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default memo(Navigation);
