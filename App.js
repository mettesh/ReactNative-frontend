import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Login from './app/pages/Login';
import StartPage from './app/pages/StartPage';
import BookDetail from './app/pages/BookDetail';

const Stack = createStackNavigator();

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.10.176:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={StartPage} />
          <Stack.Screen name="Book" component={BookDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
