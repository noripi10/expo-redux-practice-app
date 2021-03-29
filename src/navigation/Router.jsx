import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from '../navigation/MainStackNavigator';
import { AppContext } from '../context/AppContext';

const Router = () => {
  const { user } = useContext(AppContext);
  return (
    <NavigationContainer>
      {user.uid ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Router;
