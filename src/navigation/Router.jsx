import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '../navigation/StackNavigator';
import { AppContext } from '../context/AppContext';

const Router = () => {
  const { user, setUser } = useContext(AppContext);
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Router;
