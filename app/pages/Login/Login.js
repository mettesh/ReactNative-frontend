import React from 'react';
import {View, Image, ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../assets/theme';

const Login = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/booksstart.jpg')} style={styles.background}>
      <View style={styles.logoWrapper}>
        <Image source={require('../../assets/booklogo.png')} style={{width: 150, height: 150}} />
        <Text style={{color: 'white', fontSize: 36}}>Library</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.loginButton}>
          <Text style={styles.buttonTextLogin}>Logg inn</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.registerButton}>
        <Text style={styles.buttonTextRegister}>Registrer</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.white,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  logoWrapper: {flex: 3, top: 120, alignItems: 'center'},
  loginButton: {
    backgroundColor: theme.colors.primary,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    backgroundColor: theme.colors.light,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextLogin: {
    color: theme.colors.light,
    fontSize: 30,
  },
  buttonTextRegister: {
    color: theme.colors.primary,
    fontSize: 30,
  },
});

export default Login;
