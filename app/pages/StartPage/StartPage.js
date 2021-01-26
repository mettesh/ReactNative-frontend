import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../../assets/theme';

const StartPage = ({navigation}) => {
  const books = [
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 2',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 3',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 4',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 5',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 6',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 7',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 8',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 9',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 10',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 11',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 12',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 13',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 14',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
    {
      title: 'Bok 15',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      genre: 'Fiction',
    },
  ];
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <ScrollView style={styles.scrollView}>
        {books.map(book => (
          <TouchableOpacity onPress={() => navigation.navigate('Book', {book})}>
            <View style={styles.bookContainer} key={book.title}>
              <Text style={styles.headerText}>{book.title}</Text>
              <Text style={styles.subHeaderText}>{book.author}</Text>
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
