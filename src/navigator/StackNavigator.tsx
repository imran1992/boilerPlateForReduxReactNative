import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CryptoList from '../screens/cryptoList';
import CryptoAdder from '../screens/cryptoAdder';
import Skia1 from '../screens/skiaCircles';
import {images} from '../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {Navigator, Screen} = createStackNavigator();
// #region Stack Navigation
const MainStack = () => {
  return (
    <Navigator
      screenOptions={({navigation}) => ({
        ...styles,
        headerTitleAlign: 'left',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Skia1')}>
            <Image source={images.Avatar} style={styles.avatar} />
          </TouchableOpacity>
        ),
      })}>
      <Screen
        name="Skia1"
        component={Skia1}
        options={{
          headerTitle: '',
          headerBackTitleVisible: true,
          headerBackTitleStyle: {color: 'white'},
          headerTintColor: 'white',
          headerBackTitle: 'Back to list',
          headerRight: () => null,
        }}
      />
      <Screen
        name="cryptoList"
        component={CryptoList}
        options={{title: 'CryptoTacker Pro'}}
      />
      <Screen
        name="cryptoAdder"
        component={CryptoAdder}
        options={{
          headerTitle: '',
          headerBackTitleVisible: true,
          headerBackTitleStyle: {color: 'white'},
          headerTintColor: 'white',
          headerBackTitle: 'Back to list',
          headerRight: () => null,
        }}
      />
    </Navigator>
  );
};
//#endregion

const styles = StyleSheet.create({
  avatar: {height: 35, width: 35},
  headerTitleStyle: {fontSize: 20, fontWeight: 'bold', color: 'white'},
  headerStyle: {
    backgroundColor: '#385774',
    height: 100,
  },
  headerRightContainerStyle: {paddingRight: 10},
});
export default MainStack;
