/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
