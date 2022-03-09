import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Dashboard/dashboard';

const Stack = createNativeStackNavigator();

const NavigationManager = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"Dashboard"}
        >
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default NavigationManager;
