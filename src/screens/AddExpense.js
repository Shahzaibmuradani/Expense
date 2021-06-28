import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container, Button, Content, Form, Item, Input} from 'native-base';
import {addTransaction} from '../store/actions/transactionAction';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {WhiteColor} from '../utils/Constants';

const AddExpense = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const onSubmit = async () => {
    if (!title || !price) {
      return alert('Please fill all fields');
    }
    const id = Math.floor(Math.random() * 100000000);

    const newTransaction = {
      id,
      title,
      price: +price,
    };
    dispatch(addTransaction(newTransaction));
    navigation.goBack();
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item style={{...styles.item}}>
            <Input
              placeholder="Expense Title"
              onChangeText={(title) => setTitle(title)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              keyboardType="number-pad"
              placeholder="Expense Price"
              onChangeText={(price) => setPrice(price)}
            />
          </Item>
          <Button block onPress={() => onSubmit()} style={styles.button}>
            <Text style={styles.text}>Add</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 20,
  },
  text: {
    color: WhiteColor,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default AddExpense;
