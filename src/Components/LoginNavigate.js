import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DangKyScreen from '../ThongTin/DangKyScreen';
import LoginScreen from '../ThongTin/LoginScreen';
import ForgetScreen from '../ThongTin/ForgetScreen';
import TinCuaBan from '../Screens/TinCuaBan';

import DrawerNavigate from '../Components/DrawerNavigate';

const Stack = createStackNavigator();

export default function LoginNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TinCuaBan" component={TinCuaBan} />
        <Stack.Screen name="Home" component={DrawerNavigate} />
        <Stack.Screen name="DangKy" component={DangKyScreen} />
        <Stack.Screen name="Forget" component={ForgetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
