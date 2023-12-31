/* eslint-disable react/no-unstable-nested-components */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CreateAccount from '../Screens/Auth/CreateAccount/CreateAccount';
import MyBirthDate from '../Screens/Auth/CreateProfile/MyBirthDate';
import MyFirstName from '../Screens/Auth/CreateProfile/MyFirstName';
import LoginScreen from '../Screens/Auth/Login/LoginScreen';
import OTPScreen from '../Screens/Auth/OTP/OTPScreen';
import PhoneNumber from '../Screens/Auth/PhoneNumber/PhoneNumber';
import WelcomeScreen from '../Screens/Auth/Welcome/WelcomeScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import SplashScreen from '../Screens/Splash/SplashScreen';
import CreateProfile from '../Screens/Auth/CreateProfile';
import SexualOrientation from '../Screens/Auth/CreateProfile/SexualOrientation';
import ImLookingFor from '../Screens/Auth/CreateProfile/ImLookingFor';
import DistancePreference from '../Screens/Auth/CreateProfile/DistancePreference';
import YourStudy from '../Screens/Auth/CreateProfile/YourStudy';
import AddLifestyle from '../Screens/Auth/CreateProfile/AddLifestyle';
import WhatElseExtra from '../Screens/Auth/CreateProfile/WhatElseExtra';
import YourIntro from '../Screens/Auth/CreateProfile/YourIntro';
import AddRecentPics from '../Screens/Auth/CreateProfile/AddRecentPics';

export default function MainRoute() {
  const Stack = createNativeStackNavigator();

  const LoginStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none',
          statusBarAnimation: 'fade',
        }}>
        <Stack.Screen component={LoginScreen} name="Login" />
        <Stack.Screen component={WelcomeScreen} name="Welcome" />
        <Stack.Screen component={CreateAccount} name="CreateAccount" />
        <Stack.Screen component={PhoneNumber} name="PhoneNumber" />
        <Stack.Screen component={OTPScreen} name="OTP" />

        {/* CreateProfile: Why Added Here? Its Part Of Login */}
        <Stack.Screen component={CreateProfile} name="CreateProfile" />
        <Stack.Screen component={MyFirstName} name="MyFirstName" />
        <Stack.Screen component={MyBirthDate} name="MyBirthDate" />
        <Stack.Screen
          component={SexualOrientation}
          name="SexualOrientationScreen"
        />
        <Stack.Screen component={ImLookingFor} name="ImLookingFor" />
        <Stack.Screen
          component={DistancePreference}
          name="DistancePreference"
        />
        <Stack.Screen component={YourStudy} name="YourStudy" />
        <Stack.Screen component={AddLifestyle} name="AddLifestyle" />
        <Stack.Screen component={WhatElseExtra} name="WhatElseExtra" />
        <Stack.Screen component={YourIntro} name="YourIntro" />
        <Stack.Screen component={AddRecentPics} name="AddRecentPics" />
      </Stack.Navigator>
    );
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={HomeScreen} name="Home" />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          customAnimationOnGesture: true,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LoginStack" component={LoginStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
