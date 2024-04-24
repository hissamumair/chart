import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import ExpeditionPackagesScreen from '../screen/ExpeditionPackagesScreen';
import Profile from '../screen/Profile';
import Launguage from '../screen/Launguage';
import DrawerNavigator from './DrawerNavigator';
import Splash from '../screen/Splash';
import Signup from '../screen/Signup';

// import InformationHub from '../screen/InformationHub';

const AuthStack = createNativeStackNavigator();
export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <AuthStack.Screen name="Splash" component={Splash} />
      <AuthStack.Screen name="Signup" component={Signup} />

      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen
        name="ExpeditionPackagesScreen"
        component={ExpeditionPackagesScreen}
      />
      <AuthStack.Screen name="Profile" component={Profile} />
      <AuthStack.Screen name="Launguage" component={Launguage} />
      {/* <AuthStack.Screen name="InformationHub" component={InformationHub} /> */}
    </AuthStack.Navigator>
  );
}
