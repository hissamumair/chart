import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Setting from '../screen/Setting';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
