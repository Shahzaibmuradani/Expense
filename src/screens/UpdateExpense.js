import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container, Button, Content, Form, Item, Input} from 'native-base';
import {updateTransaction} from '../store/actions/transactionAction';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {WhiteColor} from '../utils/Constants';

const UpdateExpense = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [title, setTitle] = useState(route.params.title);
  const [price, setPrice] = useState(route.params.price);

  const onSubmit = async () => {
    if (!title || !price) {
      return alert('Please fill all fields');
    }
    const id = route.params.id;

    const newTransaction = {
      id,
      title,
      price: +price,
    };
    dispatch(updateTransaction(newTransaction));
    navigation.goBack();
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item style={{...styles.item}}>
            <Input value={title} onChangeText={(title) => setTitle(title)} />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              value={price.toString()}
              keyboardType="number-pad"
              onChangeText={(price) => setPrice(price)}
            />
          </Item>
          <Button block onPress={() => onSubmit()} style={styles.button}>
            <Text style={styles.text}>Update</Text>
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

export default UpdateExpense;
