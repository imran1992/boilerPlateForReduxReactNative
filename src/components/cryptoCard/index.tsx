import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {images} from '../../constants';
import {Data} from '../../types';
import {imageProvide} from '../../utils';
const CryptoCard = ({symbol, name, market_data}: Data) => {
  const {price_usd, percent_change_usd_last_24_hours: hrChange} = market_data;
  // checking increase or decrease
  const changeState = hrChange ? Math.sign(hrChange) : 0;
  return (
    <View style={style.Container}>
      <Image source={imageProvide(symbol)} style={style.cryptoAvatar} />
      <View style={style.viewsContainer}>
        <View style={style.innerViews}>
          <Text style={style.bolder}>{name}</Text>
          <Text style={style.normal}>{symbol}</Text>
        </View>
        <View style={style.innerViewsRigth}>
          <Text style={[style.bolderRight]}>${price_usd.toFixed(2)}</Text>
          <View style={style.moreInnerView}>
            {changeState !== 0 && (
              <Image
                source={
                  changeState === 1 ? images.CryptoHigh : images.CryptoLow
                }
                style={style.status}
              />
            )}
            <Text
              style={[
                style.normalRight,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  color:
                    changeState === 0
                      ? '#555'
                      : changeState === 1
                      ? 'green'
                      : 'red',
                },
              ]}>
              {`${
                market_data.percent_change_usd_last_24_hours
                  ? market_data.percent_change_usd_last_24_hours.toFixed(2)
                  : 0
              }%`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  Container: {
    width: WP(90),
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    borderBottomWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#fff',
  },
  viewsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    paddingLeft: 10,
    paddingVertical: 28,
  },
  bolder: {fontWeight: 'bold', fontSize: 18, color: '#111'},
  normal: {fontSize: 15, color: '#555'},
  bolderRight: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#111',
    textAlign: 'right',
  },
  normalRight: {fontSize: 15, textAlign: 'right'},
  innerViews: {
    height: '100%',
    justifyContent: 'space-between',
  },
  innerViewsRigth: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  moreInnerView: {alignItems: 'flex-end', flexDirection: 'row'},
  status: {height: 15, width: 15},
  cryptoAvatar: {height: 60, width: 60, borderRadius: 30},
});
export default CryptoCard;
