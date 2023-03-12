/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigation from './src/navigation';
// @ts-ignore
import Amplify from 'aws-amplify';
// @ts-ignore
import {withAuthenticator} from 'aws-amplify-react-native';
// @ts-ignore
import config from './src.aws-exports';

Amplify.configure(config);
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});


export default withAuthenticator(App);