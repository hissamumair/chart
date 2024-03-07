import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';

const MainStack = createNativeStackNavigator();
export default function Route() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen
        name="AuthNavigator"
        component={AuthNavigator}
      />
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </MainStack.Navigator>
  );
}
