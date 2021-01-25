import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, SafeAreaView, Button, Alert} from 'react-native';

export default function App() {
  const names = ['Stefaen', 'Mettus', 'Ben Kåre', 'Nusse'];

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click me"
        color="orange"
        onPress={() =>
          Alert.alert('My title', 'My message', [
            {text: 'yes', onPress: () => console.log('Yes')},
            {text: 'No', onPress: () => console.log('No')},
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Vil fylle hele skjermen
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
