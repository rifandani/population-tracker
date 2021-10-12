import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// files
import logCurrentStorage from '../../utils/logCurrentStorage';
import { useAppSelector, useAppDispatch } from '../../lib/redux/store';
import {
  counterSelector,
  increment,
  decrement,
} from '../../lib/redux/slices/counter';

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const Counter = (): JSX.Element => {
  const { count } = useAppSelector(counterSelector);
  const dispatch = useAppDispatch();

  const onIncrement = () => {
    dispatch(increment());
    logCurrentStorage();
  };

  const onDecrement = () => {
    dispatch(decrement());
    logCurrentStorage();
  };

  return (
    <View>
      <Text testID="countText">{count}</Text>

      <View style={styles.separator} />

      <Pressable onPress={onIncrement}>
        {({ pressed }) => <Text>{pressed ? 'Pressed!' : 'Increment'}</Text>}
      </Pressable>

      <View style={styles.separator} />

      <Pressable onPress={onDecrement}>
        {({ pressed }) => <Text>{pressed ? 'Pressed!' : 'Decrement'}</Text>}
      </Pressable>
    </View>
  );
};

export default Counter;
