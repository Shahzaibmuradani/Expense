import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {OrangeColor} from '../utils/Constants';

const Empty = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>No transactions yet.</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: OrangeColor,
    fontWeight: '700',
    fontSize: 20,
  },
});
