import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* Components */
import HomeScreen from './src/screens/HomeScreen';
import AddExpense from './src/screens/AddExpense';
import UpdateExpense from './src/screens/UpdateExpense';

/* Store */
// import store from './src/store';

import {store, persister} from './src/store';

import {PersistGate} from 'redux-persist/src/integration/react';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Expense App',
              }}
            />
            <Stack.Screen
              name="AddExpense"
              component={AddExpense}
              options={{title: 'Add Expense'}}
            />
            <Stack.Screen
              name="UpdateExpense"
              component={UpdateExpense}
              options={{title: 'Update Expense'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
