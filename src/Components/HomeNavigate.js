import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import TinCuaBan from '../Screens/TinCuaBan';
import ThongBao from '../Screens/ThongBao';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function HomeNavigate() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Trang Chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Tin Của Bạn') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Thông Báo') {
            iconName = focused ? 'home' : 'home-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#b3b3ff',
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        inactiveBackgroundColor: 'white', // Màu nền cho tab không hoạt động
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Trang Chủ"
        component={HomeScreen}
        options={{tabBarBadge: 3}}
      />
      <Tab.Screen
        name="Thông Báo"
        component={ThongBao}
        options={{tabBarBadge: 3}}
      />
      <Tab.Screen name="Tin Của Bạn" component={TinCuaBan} />
    </Tab.Navigator>
  );
}
