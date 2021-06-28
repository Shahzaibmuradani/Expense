import {ADD_TRANSACTION, DELETE_TRANSACTION, UPDATE_TRANSACTION} from './types';

export const addTransaction = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTION, payload: newTransaction});
};

export const deleteTransaction = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION, payload: id});
};

export const updateTransaction = (newTransaction) => (dispatch) => {
  dispatch({type: UPDATE_TRANSACTION, payload: newTransaction});
};
