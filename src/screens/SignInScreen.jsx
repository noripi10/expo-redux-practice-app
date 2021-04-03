import React from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SignInScreen = (props) => {
  const { setUser } = useContext(AppContext);

  const { navigation } = props;

  const authHandler = async () => {
    setUser((user) => ({ ...user, uid: Math.random().toString() }));
  };

  useEffect(() => {
    // navigation.setOptions({
    //   headerTitle: 'サインイン',
    // });
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
