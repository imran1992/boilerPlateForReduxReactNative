/**
 * Author: Imran Noor
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainAppNavigator from './navigator';
const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <MainAppNavigator />
      </View>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default App;
