// DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Guide from '../screen/Guide';
import Notification from '../screen/Notification';
import BottomTabNavigator from './BottomTabNavigator';
import Home from '../screen/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" options={{headerShown:false}}>
     
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} // Hide header for this screen
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }} // Hide header for this screen
      />
      <Drawer.Screen
        name="Guide"
        component={Guide}
        options={{ headerShown: false }} // Hide header for this screen
      />
    </Drawer.Navigator>
  );
}
