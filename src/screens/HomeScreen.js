import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, Body, Right} from 'native-base';
import Card from '../components/Card';
import Empty from '../components/Empty';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionAction';
import {
  BlackColor,
  LightBlueColor,
  PinkColor,
  SHeight,
  WhiteColor,
} from '../utils/Constants';

function Item({title, id, price, navigation}) {
  const dispatch = useDispatch();

  return (
    <View style={styles.listView}>
      <ListItem>
        <TouchableOpacity
          onPress={() => {
            dispatch(deleteTransaction(id));
          }}>
          {/* <Text style={{color: 'red', fontSize: 18}}>X</Text> */}
          <MaterialCommunityIcons name="delete" color="red" size={20} />
        </TouchableOpacity>

        <Body>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UpdateExpense', {
                id: id,
                title: title,
                price: price,
              })
            }>
            <Text style={styles.titleText}>{title}</Text>
          </TouchableOpacity>
        </Body>

        <Right>
          <Text style={styles.priceText}>
            {price > 0 ? `${price} RS` : `${Math.abs(price)} RS`}
          </Text>
        </Right>
      </ListItem>
    </View>
  );
}

const HomeScreen = ({navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);
  //console.log(transactions);
  return (
    <Container>
      <Animated.View style={styles.parentView}>
        <Card navigation={navigation} />
      </Animated.View>

      <View style={styles.childView}>
        {transactions.length > 0 ? (
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={transactions}
            renderItem={({item}) => (
              <Item
                navigation={navigation}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            )}
          />
        ) : (
          <Empty />
        )}
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddExpense')}
          style={styles.addButton}>
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  listView: {
    marginVertical: 3,
    // paddingTop: 30,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 10,
    color: LightBlueColor,
    textDecorationLine: 'underline',
  },
  priceText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    fontWeight: '400',
    color: BlackColor,
  },
  parentView: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  childView: {
    flex: 1,
    marginTop: -160,
  },
  addButton: {
    marginHorizontal: 10,
    marginBottom: 8,
    borderRadius: 20,
    backgroundColor: PinkColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: SHeight * (5 / 100),
  },
  buttonText: {
    fontSize: 18,
    color: WhiteColor,
  },
});
