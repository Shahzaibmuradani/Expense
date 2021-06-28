import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {
  WalletColor,
  WalletColorOne,
  WalletColorTwo,
  WhiteColor,
} from '../utils/Constants';

const Balance = () => {
  const {transactions} = useSelector((state) => state.transactions);
  const prices = transactions.map((transaction) => transaction.price);
  const totalPrice = prices.reduce((prev, cur) => (prev += cur), 0).toFixed(2);

  return (
    <LinearGradient
      colors={[WalletColor, WalletColorOne, WalletColorTwo]}
      style={styles.box}>
      <View style={styles.view}>
        <Text style={styles.wallet}>Wallet</Text>
        <Text style={styles.priceText}>{totalPrice} Rupees</Text>
      </View>

      {/* <View
        style={{
          alignItems: 'flex-end',
          width: '30%',
        }}></View> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  },
  view: {
    width: '70%',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  wallet: {
    fontSize: 25,
    color: WhiteColor,
    fontFamily: 'Lato-Regular',
    fontWeight: '700',
  },
  priceText: {
    fontFamily: 'Lato-Medium',
    fontSize: 32,
    color: WhiteColor,
    fontWeight: '700',
  },
});

export default Balance;
