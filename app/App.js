import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ApolloProvider} from '@apollo/client';
import useApolloClient from './api/gqlClient';
import Login from './pages/Login';
import StartPage from './pages/StartPage';
import BookDetail from './pages/BookDetail';

const Stack = createStackNavigator();
const apolloClient = useApolloClient();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={StartPage} />
          <Stack.Screen name="Book" component={BookDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
