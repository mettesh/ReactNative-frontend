import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import theme from '../../assets/theme';

const Loading = () => {
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <Text style={styles.text}>Laster . .</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: theme.colors.black,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: theme.colors.white,
  },
});

export default Loading;
