import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Redux from '../redux';
import StackNavigator from './StackNavigator';
enableScreens();

const NavigatorExplorer = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <Provider store={Redux.Store}>
        <PersistGate loading={null} persistor={Redux.Persistor}>
          <StackNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};
export default NavigatorExplorer;
