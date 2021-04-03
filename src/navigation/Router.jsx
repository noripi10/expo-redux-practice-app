import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from '../navigation/MainStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import { LockScreen } from '../screens';
import { AppContext } from '../context/AppContext';

const Router = () => {
  const { isFocus, user } = useContext(AppContext);
  const selectedScreen = () => {
    if (user.uid) {
      return <MainStackNavigator />;
    } else {
      return <AuthStackNavigator />;
    }
  };
  return <NavigationContainer>{selectedScreen()}</NavigationContainer>;
};

export default Router;
