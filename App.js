import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  View,
} from 'react-native';

// Gir oss riktige dimensjoner på skjerm etter om det er portrait/landscape
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {
  const {landscape, portrait} = useDeviceOrientation;

  return (
    // Kan sende inn array med styler {[styles.contantainer, styles.containerTwo]}
    // Blir likt som å gi en komponent flere klasser
    <SafeAreaView style={styles.container}>
      <View
        style={{backgroundColor: 'blue', width: '100%', height: portrait ? '100%' : '30%'}}
      ></View>
    </SafeAreaView>
  );
}

// benytter StyleSheet.create for å få validering
const styles = StyleSheet.create({
  container: {
    flex: 1, // Vil fylle hele skjermen
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 0,
  },
});
