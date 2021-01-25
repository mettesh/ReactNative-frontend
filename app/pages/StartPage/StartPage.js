import React from 'react';
import {View, Image, SafeAreaView, StyleSheet} from 'react-native';
import theme from '../../assets/theme';

export default function StartPage() {
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.navWrapper}>
        <View style={[{backgroundColor: theme.colors.orange}, styles.closeIcon]} />
        <View style={[{backgroundColor: theme.colors.lightBrown}, styles.deleteIcon]} />
      </View>

      <Image
        resizeMode="contain"
        source={require('../../assets/books/Thinking1.jpg')}
        style={styles.image}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {backgroundColor: '#000', flex: 1},
  navWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeIcon: {width: 40, height: 40, left: 20},
  deleteIcon: {width: 40, height: 40, right: 20},
  image: {width: '100%', height: '70%', bottom: 100},
});
