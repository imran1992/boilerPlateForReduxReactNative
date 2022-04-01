import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {addMyCrypto} from '../../redux/actions';
import {RootState} from '../../redux/reducer';
import {useSelector, useDispatch} from 'react-redux';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import API from '../../services';
import {Crypto} from '../../types';
const CryptoAdderScreen = ({navigation}: any) => {
  const {list} = useSelector(({userState}: RootState) => userState);
  const dispatch = useDispatch();
  const [crypto, setCrypto] = useState<string>('');
  const [focused, setFocus] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  const onSubmit = () => {
    if (!list.includes(crypto.toLocaleUpperCase())) {
      setLoading(true);
      setCrypto('');
      API.getMetrics(crypto)
        .then((inComingRes: Crypto) => {
          // Is any error
          if (inComingRes && !inComingRes.status.error_code) {
            //Does our list already include this currency?
            if (!list.includes(inComingRes.data.symbol.toLocaleUpperCase())) {
              //And curreny to Persisted list and append currency data to list
              addMyCrypto({
                cypto: inComingRes.data.symbol,
                apiResult: inComingRes,
              })(dispatch);
              // Go Back after 1 sec
              setTimeout(() => navigation.goBack(), 1000);
            } else {
              Alert.alert('Hi', 'Its already in the list');
            }
          } else {
            Alert.alert('Hmm', 'Not found');
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      Alert.alert('Hi', 'Its already in the list');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Add a Cryptocurrency</Text>
      <TextInput
        defaultValue={crypto}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setFocus(false);
        }}
        onChangeText={setCrypto}
        placeholderTextColor={'#aaa'}
        style={[
          styles.inputStyle,
          {borderColor: focused ? '#FBD24D' : '#999999'},
        ]}
        placeholder="Use a name or ticker symbol..."
      />
      <TouchableOpacity
        onPress={onSubmit}
        style={styles.btn}
        disabled={!crypto}
        activeOpacity={0.85}>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <Text style={styles.btnText}>Add</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 100,
    paddingHorizontal: WP(5),
  },
  btnText: {fontSize: 18, fontWeight: 'bold'},
  btn: {
    marginTop: 20,
    paddingHorizontal: 60,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 4,
    backgroundColor: '#FBD24D',
  },
  Title: {
    marginBottom: 30,
    textAlign: 'left',
    fontSize: 28,
    fontWeight: 'bold',
  },
  inputStyle: {
    height: 48,
    width: WP(90),
    backgroundColor: '#f1f2f3',
    borderRadius: 4,
    paddingHorizontal: 10,
    color: '#333',
    borderWidth: 1,
  },
});
export default CryptoAdderScreen;
