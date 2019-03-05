import { CHANGE_LOGIN_EMAIL, CHANGE_LOGIN_PASSWORD, START_LOGIN, WRONG_PASSWORD, LOGIN_SUCCESS, VOID_USER } from '../actions/types';
import { State } from 'react-native-gesture-handler';

const INITIAL_STATE = {
  email: '',
  password: '',
  userId: '',
  loading: false,
  error: '',
  redirect: false
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LOGIN_EMAIL:
      return { ...state, email: action.payload }

    case CHANGE_LOGIN_PASSWORD:
      return { ...state, password: action.payload }

    case START_LOGIN:
      return { ...state, loading: true, error: '' }

    case WRONG_PASSWORD:
      return { ...state, loading: false, error: 'Your password is incorrect' }
  
    case LOGIN_SUCCESS:
      return { ...state, loading: false, userId: action.payload, error: '', redirect: true }

    case VOID_USER:
      return{ ...state, loading: false, error: 'credentials don\'t match any of those available' }

    default:
      return state;
  }
}