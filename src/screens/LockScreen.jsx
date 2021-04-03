import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigation } from '@react-navigation/core';

const LockScreen = () => {
  const { isLock, setLock } = useContext(AppContext);
  const navigation = useNavigation();

  const releaseHandler = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      setLock(true);
      alert('生体認証が設定されていない為ロックを解除しました');
      return;
    }
    const { success, error } = await LocalAuthentication.authenticateAsync();
    if (error) {
      alert(error);
    }
    if (success) {
      setLock(false);
    }
  };

  useEffect(() => {
    if (!isLock) {
      navigation.goBack();
    }
  }, [isLock]);

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

export default LockScreen;
