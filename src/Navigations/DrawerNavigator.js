// DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Guide from '../screen/Guide';
import Notification from '../screen/Notification';
import BottomTabNavigator from './BottomTabNavigator';
import ExpeditionPackagesScreen from '../screen/ExpeditionPackagesScreen';

// import InformationHub from '../screen/InformationHub';

// import Profile from '../screen/Profile';
// import Launguage from '../screen/Launguage';



const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator options={{headerShown:false}}>
     <Drawer.Screen
   
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ title:'Home', headerShown: false }} // Hide header for this screen
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
        <Drawer.Screen
        name="ExpeditionPackages"
        component={ExpeditionPackagesScreen}
        options={{ headerShown: false }} // Hide header for this screen
      />
      {/* <Drawer.Screen
        name="InformationHub"
        component={InformationHub}
        options={{ headerShown: false }} // Hide header for this screen
      /> */}
        {/* <Drawer.Screen
        name="Launguage settiing"
        component={Launguage}
        options={{ headerShown: false }} // Hide header for this screen
      />
        <Drawer.Screen
        name="Profile Setting"
        component={Profile}
        options={{ headerShown: false }} // Hide header for this screen
      /> */}
    </Drawer.Navigator>
  );
}
