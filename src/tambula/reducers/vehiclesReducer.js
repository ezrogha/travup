import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  vehicles: []
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    
    case types.START_FETCH_VEHICLES:
      return { ...state, loading: true }

    case types.FETCH_VEHICLES_SUCCESS:
      return { ...state, vehicles: action.payload, loading: false, error: '' }

    case types.FETCH_VEHICLES_ERROR:
      return { ...state, error: action.payload, loading: false }
  
    default:
      return state
  }
}