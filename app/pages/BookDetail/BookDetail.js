import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../../assets/theme';

const BookDetail = ({route, navigation}) => {
  const {book} = route.params;

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <Text style={styles.bookHeader}>{book.title}</Text>
      <Text style={styles.bookText}>Forfatter: {book.author}</Text>
      <Text style={styles.bookText}>Antall reviews: {book.reviews}</Text>
      <Text style={styles.bookText}>Rating: {book.view_rating}</Text>
      <Text style={styles.bookText}>Utgitt: {book.year}</Text>
      <Text style={styles.bookText}>Sjanger: {book.genre}</Text>
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
  bookHeader: {
    fontSize: 50,
    color: theme.colors.orange,
    fontWeight: 'bold',
  },
  bookText: {
    fontSize: 30,
    color: theme.colors.light,
  },
});

export default BookDetail;
