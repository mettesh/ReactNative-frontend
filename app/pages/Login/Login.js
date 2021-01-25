import React from 'react';
import {View, Image, ImageBackground, Text, StyleSheet} from 'react-native';
import theme from '../../assets/theme';

export default function Login() {
  return (
    <ImageBackground source={require('../../assets/booksstart.jpg')} style={styles.background}>
      <View style={styles.logoWrapper}>
        <Image source={require('../../assets/booklogo.png')} style={{width: 150, height: 150}} />
        <Text style={{color: 'white', fontSize: 36}}>Library</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  logoWrapper: {flex: 3, top: 120, alignItems: 'center'},
  loginButton: {backgroundColor: theme.colors.primary, width: '100%', height: 80},
  registerButton: {backgroundColor: theme.colors.light, width: '100%', height: 80},
});
