import INITIAL_STATE from "./registerState";
import * as types from "../actions/types";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case types.CHANGE_CITY:
      return { ...state, city: action.payload };

    case types.CHANGE_VEHICLE_TYPE:
      return { ...state, type: action.payload };

    case types.CHANGE_GEAR:
      return { ...state, gear: action.payload };

    case types.CHANGE_WHEEL_DRIVE:
      return { ...state, wheel_drive: action.payload };

    case types.CHANGE_FUEL:
      return { ...state, fuel: action.payload };

    case types.CHANGE_SEATERS:
      return { ...state, seaters: action.payload };

    case types.CHANGE_VEHICLE_REGISTRATION:
      return { ...state, vehicle_registration: action.payload };

    case types.CHANGE_VEHICLE_BRAND:
      return { ...state, vehicle_brand: action.payload };
    
    case types.CHANGE_VEHICLE_MODEL:
      return { ...state, vehicle_model: action.payload };

    case types.CHANGE_VEHICLE_MAKE:
      return { ...state, vehicle_make: action.payload };

    case types.CHANGE_COMMENT:
      return { ...state, comment: action.payload };

    case types.CREATE_VEHICLE_ID:
      return { ...state, itemId: action.payload };

    case types.CHANGE_PICTURESRC1:
      return {
        ...state,
        pictureSrc: { ...state.pictureSrc, pictureSrc1: action.payload }
      };

    case types.CHANGE_PICTURESRC2:
      return {
        ...state,
        pictureSrc: { ...state.pictureSrc, pictureSrc2: action.payload }
      };

    case types.CHANGE_PICTURESRC3:
      return {
        ...state,
        pictureSrc: { ...state.pictureSrc, pictureSrc3: action.payload }
      };

    case types.CHANGE_PICTURESRC4:
      return {
        ...state,
        pictureSrc: { ...state.pictureSrc, pictureSrc4: action.payload }
      };

    case types.CHANGE_PICTURESRC5:
      return {
        ...state,
        pictureSrc: { ...state.pictureSrc, pictureSrc5: action.payload }
      };

    case types.REGISTER_START:
      return {
        ...state, loading: true
      }

    default:
      return state;
  }
};
