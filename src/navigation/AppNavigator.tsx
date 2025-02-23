import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import FullNameScreen from '../screens/FullNameScreen';
import UserNameScreen from '../screens/UserNameScreen';
import PhoneNumberScreen from '../screens/PhoneNumberScreen';
import VerifyOtpScreen from '../screens/VerifyOtpScreen';
import AddWidgetScreen from '../screens/AddWidgetScreen';
import CameraScreen from '../screens/CameraScreen';
import LastScreen from '../screens/LastScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingScreen'>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FullNameScreen"
          component={FullNameScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserNameScreen"
          component={UserNameScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhoneNumberScreen"
          component={PhoneNumberScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyOtpScreen"
          component={VerifyOtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddWidgetScreen"
          component={AddWidgetScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LastScreen"
          component={LastScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})