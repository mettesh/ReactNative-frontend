import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './app/pages/Login';
import StartPage from './app/pages/StartPage';
import BookDetail from './app/pages/BookDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={StartPage} />
        <Stack.Screen name="Book" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
