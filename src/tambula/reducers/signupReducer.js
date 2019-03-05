import { CHANGE_SIGNUP_NAME, CHANGE_SIGNUP_CONTACT, CHANGE_SIGNUP_EMAIL, CHANGE_SIGNUP_ADDRESS, CHANGE_SIGNUP_PASSWORD, CHANGE_SIGNUP_CONFIRM_PASSWORD, START_SIGNUP, COMPLETE_SIGNUP, ERROR_SIGNUP } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  contact: '',
  email: '',
  address: '',
  password: '',
  confirm_password: '',
  loading: false,
  error: '',
  redirect: false
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SIGNUP_NAME:
      return { ...state, name: action.payload }

    case CHANGE_SIGNUP_CONTACT:
      return { ...state, contact: action.payload }

    case CHANGE_SIGNUP_EMAIL:
      return { ...state, email: action.payload }

    case CHANGE_SIGNUP_ADDRESS:
      return { ...state, address: action.payload }

    case CHANGE_SIGNUP_PASSWORD:
      return { ...state, password: action.payload }

    case CHANGE_SIGNUP_CONFIRM_PASSWORD:
      return { ...state, confirm_password: action.payload }

    case START_SIGNUP:
      return { ...state, loading: true, error: '', redirect: false }

    case COMPLETE_SIGNUP:
      return { ...state, loading: false, error: '', redirect: true }

    case ERROR_SIGNUP:
      return { ...state, loading: false, error: 'Failed to create your account', redirect: false }
  
    default:
      return state;
  }
}