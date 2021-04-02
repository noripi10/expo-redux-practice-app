import React, { useContext } from 'react';
import { AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from '../navigation/MainStackNavigator';
import { AppContext } from '../context/AppContext';
import { useEffect } from 'react';
import { LockScreen } from '../screens/LockScreen';

const Router = () => {
  const { isFocus, user } = useContext(AppContext);
  return (
    <NavigationContainer>
      {isFocus ? (
        user.uid ? (
          <MainStackNavigator />
        ) : (
          <AuthStackNavigator />
        )
      ) : (
        <LockScreen />
      )}
    </NavigationContainer>
  );
};

export default Router;
