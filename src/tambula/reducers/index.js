import { combineReducers } from 'redux';
import VehiclesReducer from './vehiclesReducer';
import RegisterReducer from './registerReducer';
import LoginReducer from './loginReducer';
import SignupReducer from './signupReducer';

export default combineReducers({
  Vehicles: VehiclesReducer,
  Register: RegisterReducer,
  Login: LoginReducer,
  Signup: SignupReducer
})
