import {ApolloClient, InMemoryCache} from '@apollo/client';
import {API_URL} from '@env';

const useApolloClient = () => {
  console.log();

  // Initialize Apollo Client
  return new ApolloClient({
    uri: API_URL + '/graphql',
    cache: new InMemoryCache(),
  });
};

export default useApolloClient;
