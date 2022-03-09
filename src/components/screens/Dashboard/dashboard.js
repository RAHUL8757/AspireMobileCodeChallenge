import React, { useState, useEffect } from 'react';
import { Button, View, Text, BackHandler,Alert,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../utlis/Color';
import styles from '../../styles/dashboard.style';
import { useDispatch, useSelector } from 'react-redux';
import  DebitCredit from './debitCard'
import  Home from './Home'
import  Payments from './Payments'
import  Profile from './Profile'
import  Credit from './Credit'


const Tab = createBottomTabNavigator();

const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };
  
 

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  return (
    <Tab.Navigator
      initialRouteName='Debit Card'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require("../../../../assets/Home.png");
          } else if (route.name === 'Debit Card') {
           iconName = require("../../../../assets/Card.png");
          } else if (route.name === 'Payments') {
           iconName = require("../../../../assets/Payments.png");
          }
           else if (route.name === 'Credit') {
           iconName = require("../../../../assets/Credit.png");
          
          } else if (route.name === 'Profile') {
           iconName = require("../../../../assets/user.png");
          }
          return  <Image
          style={{
            width: 30,
            height: 30,
            tintColor:color
          }}
          source={iconName}
        />;
        },
        tabBarActiveTintColor: colors.tabBarActive,
        tabBarActiveBackgroundColor: colors.white,
        tabBarInactiveBackgroundColor: colors.white,
        tabBarInactiveTintColor: colors.tabBarNotActive,
        // tabBarBadgeStyle: styles.tabBarBadge,
        // tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBar,
      })}>
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Tab.Screen
       name="Debit Card"
        options={{ headerShown: false }}
        component={DebitCredit}
      />
      <Tab.Screen
        name="Payments"
        options={{ headerShown: false }}
        component={Payments}
      />
      <Tab.Screen
        name="Credit"
        options={{ headerShown: false }}
        component={Credit}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};
export default Dashboard;
