import React from 'react';
import {StyleSheet, Text, SafeAreaView, Button, Alert, Platform, StatusBar} from 'react-native';

export default function App() {
  const names = ['Stefaen', 'Mettus', 'Ben Kåre', 'Nusse'];

  return (
    // Kan sende inn array med styler {[styles.contantainer, styles.containerTwo]}
    // Blir likt som å gi en komponent flere klasser
    <SafeAreaView style={styles.container}>
      <Button
        title="Click me"
        color="blue"
        onPress={() => Alert.prompt('My title', 'My message', text => console.log(text))}
      />
    </SafeAreaView>
  );
}

// benytter StyleSheet.create for å få validering
const styles = StyleSheet.create({
  container: {
    flex: 1, // Vil fylle hele skjermen
    backgroundColor: 'orange',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 0,
  },
});
