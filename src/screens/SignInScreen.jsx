import React from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SignInScreen = (props) => {
  const { user, setUser } = useContext(AppContext);

  const { navigation } = props;
  // const navigation = useNavigation();

  const authHandler = async () => {
    // console.log(
    //   'hasHardwareAsync',
    //   await LocalAuthentication.hasHardwareAsync()
    // );
    // console.log(
    //   'supportedAuthenticationTypesAsync',
    //   await LocalAuthentication.supportedAuthenticationTypesAsync()
    // );
    // console.log(
    //   'isEnrolledAsync',
    //   await LocalAuthentication.isEnrolledAsync()
    // );
    const { success } = await LocalAuthentication.authenticateAsync();
    console.log({ success });
    if (success) {
      setUser((user) => ({ ...user, uid: Math.random().toString() }));
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'サインイン',
    });

    authHandler();
  }, []);

  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>
      <Button title="サインイン" onPress={authHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
