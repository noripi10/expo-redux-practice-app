import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const LockScreen = ({}) => {
  const { setFocus } = useContext(AppContext);

  const releaseHandler = async () => {
    const { success } = await LocalAuthentication.authenticateAsync();
    console.log({ success });
    if (success) {
      setFocus(true);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>LockScreen</Text>
        <Button title="ロック解除" onPress={() => releaseHandler()} />
      </View>
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
