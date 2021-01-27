import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import theme from '../../assets/theme';
import Error from '../../pages/Error';
import Loading from '../../pages/Loading';

const GET_ALL_BOOKS = gql`
  query allBooks {
    allBooks {
      id
      name
      author {
        name
      }
    }
  }
`;

const StartPage = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_ALL_BOOKS);
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <ScrollView style={styles.scrollView}>
        {data &&
          data.allBooks.map(book => (
            <TouchableOpacity onPress={() => navigation.navigate('Book', book.id)} key={book.id}>
              <View style={styles.bookContainer}>
                <Text style={styles.headerText} key={book.name}>
                  {book.name}
                </Text>
                <Text style={styles.subHeaderText} key={book.author.name}>
                  {book.author.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: theme.colors.black,
    flex: 1,
  },
  navWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeIcon: {
    width: 40,
    height: 40,
    left: 20,
  },
  deleteIcon: {
    width: 40,
    height: 40,
    right: 20,
  },
  scrollView: {
    flex: 1,
  },
  bookContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
    alignItems: 'center',
    borderBottomColor: theme.colors.orange,
  },
  headerText: {
    fontSize: 30,
    color: theme.colors.white,
  },
  subHeaderText: {
    fontSize: 15,
    color: theme.colors.white,
  },
});

export default StartPage;
