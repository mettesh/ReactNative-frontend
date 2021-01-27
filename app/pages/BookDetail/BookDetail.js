import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import theme from '../../assets/theme';
import Error from '../../pages/Error';
import Loading from '../../pages/Loading';

const GET_BOOK_BY_ID = gql`
  query bookById($id: Int!) {
    bookById(id: $id) {
      name
      author {
        name
      }
      userRating
      reviews
      price
      year
      genre
    }
  }
`;

const BookDetail = ({route, navigation}) => {
  const bookId = route.params;
  const {loading, error, data} = useQuery(GET_BOOK_BY_ID, {
    variables: {id: parseInt(bookId, 10)},
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  const {name, author, userRating, reviews, year, genre, price} = data.bookById;

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <Text style={styles.bookHeader}>{name}</Text>
      <Text style={styles.bookText}>Forfatter: {author.name}</Text>
      <Text style={styles.bookText}>Sjanger: {genre}</Text>
      <Text style={styles.bookText}>Utgitt: {year}</Text>
      <Text style={styles.bookText}>Antall reviews: {reviews}</Text>
      <Text style={styles.bookText}>Rating: {userRating}</Text>
      <Text style={styles.bookText}>Pris: {price}$</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: theme.colors.black,
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  bookHeader: {
    textAlign: 'center',
    fontSize: 40,
    color: theme.colors.orange,
    fontWeight: 'bold',
  },
  bookText: {
    textAlign: 'center',
    fontSize: 20,
    color: theme.colors.light,
  },
});

export default BookDetail;
