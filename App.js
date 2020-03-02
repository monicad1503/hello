import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
});
export default createAppContainer(MainNavigator);


