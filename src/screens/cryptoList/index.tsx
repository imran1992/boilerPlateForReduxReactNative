import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Alert,
  RefreshControl,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FlatList from 'react-native-swipeable-list';
import {Crypto} from '../../types';
import {RootState} from '../../redux/reducer';
import {updateDataList, deleteCrypto} from '../../redux/actions';
import {CryptoCard} from '../../components';
import API from '../../services';

const CryptoListScreen = ({navigation}: any) => {
  const {list, dataList}: {dataList: Array<Crypto>; list: Array<string>} =
    useSelector(({userState, appState}: RootState) => ({
      ...userState,
      ...appState,
    }));
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const {bottom} = useSafeAreaInsets();
  console.log('list', list);
  const getAllData = (listOfCrypto: Array<string>) => {
    return Promise.all(listOfCrypto.map(API.getMetrics));
  };
  //Swipe Down Refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getAllData(list).then(resList => {
      updateDataList(resList)(dispatch);
      setRefreshing(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  useEffect(() => {
    getAllData(list).then(resList => {
      updateDataList(resList)(dispatch);
    });
    const Trackerx = setInterval(() => {
      getAllData(list).then(resList => {
        updateDataList(resList)(dispatch);
      });
    }, 60000);

    return () => {
      clearInterval(Trackerx);
    };
    // getAllData(list).then(resList => {
    //   updateDataList(resList)(dispatch);
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // #region Wwipe from right delete
  const onDelete = (item: Crypto) => {
    deleteCrypto(item.data.symbol)(dispatch);
  };
  const QuickActions = ({item}: {item: Crypto}) => {
    return (
      <View style={styles.qaContainer}>
        <View style={styles.button}>
          <Pressable
            onPress={() => {
              Alert.alert(
                'Are you sure?',
                'You want to delete?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'Deleted',
                    onPress: () => onDelete(item),
                    style: 'destructive',
                  },
                ],
                {cancelable: false},
              );
            }}>
            <Text style={styles.buttonText}>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  // #endregion

  const filtered = dataList.filter(itm => itm !== null);
  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.FLatList}
        contentContainerStyle={styles.FLatListCont}
        data={filtered}
        keyExtractor={(item: Crypto) => item.data.id}
        renderItem={({item}: {item: Crypto}) => <CryptoCard {...item.data} />}
        renderQuickActions={QuickActions}
        maxSwipeDistance={80}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('cryptoAdder');
        }}
        style={styles.addBtn}>
        <Text style={styles.addBtnText}>+ Add a Cryptocurrency</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  FLatList: {backgroundColor: 'white', flex: 1},
  FLatListCont: {paddingTop: 20},
  addBtn: {height: 70, justifyContent: 'center', alignItems: 'center'},
  addBtnText: {
    fontSize: 18,
    color: '#385774',
  },
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonE: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    paddingVertical: 10,
    fontWeight: 'bold',
    opacity: 0.8,
  },
});
export default CryptoListScreen;
