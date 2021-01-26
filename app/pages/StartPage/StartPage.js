import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet, Text} from 'react-native';
import theme from '../../assets/theme';

const StartPage = () => {
  const books = [
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
    {
      title: 'Bok 1',
      author: 'Hans Hansen',
      reviews: 300,
      view_rating: 4.5,
      year: 2009,
      gender: 'Fiction',
    },
  ];
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.navWrapper}>
        <View style={[{backgroundColor: theme.colors.orange}, styles.closeIcon]} />
        <View style={[{backgroundColor: theme.colors.lightBrown}, styles.deleteIcon]} />
      </View>

      <ScrollView style={styles.scrollView}>
        {books.map(book => (
          <View style={styles.bookContainer} key={book.title}>
            <Text style={styles.headerText}>{book.title}</Text>
            <Text style={styles.subHeaderText}>{book.author}</Text>
          </View>
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
    width: '100%',
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
