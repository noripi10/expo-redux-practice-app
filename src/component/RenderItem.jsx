import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const RenderItem = ({ item, deleteTodo }) => {
  return (
    <View style={styles.renderItemContainer}>
      <Text>{item.todo}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => deleteTodo(item)}
        >
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  renderItemContainer: {
    flex: 1,
    position: 'relative',
    height: 45,
    padding: 8,
    paddingLeft: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    position: 'absolute',
    right: 16,
    backgroundColor: 'pink',
    borderRadius: 6,
    padding: 6,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
