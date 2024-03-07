import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Setting from '../screen/Setting';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        initialParams={{ navigation }}
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        initialParams={{ navigation }}
        options={{
          headerShown:false,
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
