/* eslint-disable react/no-unstable-nested-components */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import SplashScreen from '../Screens/Splash/SplashScreen';

// ========================== AUTH SCREENS ==========================
import {
  AddLifestyle,
  AddRecentPics,
  CreateProfile,
  DistancePreference,
  ImLookingFor,
  LocationPermission,
  LoginScreen,
  ManageContacts,
  MyBirthDate,
  MyFirstName,
  MyGender,
  OTPScreen,
  PhoneNumber,
  SexualOrientation,
  WelcomeScreen,
  WhatElseExtra,
  YourIntro,
  YourStudy,
  AllGendersSearch,
} from '../Screens/Auth';

// ========================== HOME SCREENS ==========================
import HomeScreen from '../Screens/Home/HomeScreen';
import ExploreCard from '../Screens/Explore/ExploreCard';

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
        <Stack.Screen component={PhoneNumber} name="PhoneNumber" />
        {/* <Stack.Screen component={OTPScreen} name="OTP" /> */}

        {/* CreateProfile: Why Added Here? Its Part Of Login */}

        {/* <Stack.Screen component={CreateProfile} name="CreateProfile" />
        <Stack.Screen component={MyFirstName} name="MyFirstName" />
        <Stack.Screen component={MyBirthDate} name="MyBirthDate" />
        <Stack.Screen component={MyGender} name="MyGender" />
        <Stack.Screen component={AllGendersSearch} name="AllGendersSearch" />
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
        <Stack.Screen
          component={LocationPermission}
          name="LocationPermission"
        />
        <Stack.Screen component={ManageContacts} name="ManageContacts" /> */}
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
        <Stack.Screen component={ExploreCard} name="Explore" />
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
