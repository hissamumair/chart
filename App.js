// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import Splash from './src/screen/Splash';
// import Signup from './src/screen/Signup';
// import Login from './src/screen/Login';
// import Home from './src/screen/Home';
// import Post from './src/screen/Post';
// import BottomTabNavigator from './src/Navigations/BottomTabNavigator';
// import Dashboard from './src/screen/Dashboard';
// import 'react-native-gesture-handler';
// import DrawerNavigator from './src/Navigations/DrawerNavigator';


// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Splash" component={Splash} />
//         <Stack.Screen name="Signup" component={Signup} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
//         <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
//         <Stack.Screen name="Dashboard" component={Dashboard} />


//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



// export default App;


















// // Bottom tab navigator for main app flow (Home, Post)
// // const MainTabNavigator = () => (
// //   <Tab.Navigator>
// //     <Tab.Screen name="Home" component={Home} />
// //     <Tab.Screen name="Post" component={Post} />
// //   </Tab.Navigator>
// // );

// App.js
// App.js
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/Navigations/MainNavigator'; // Use MainNavigator

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}



 