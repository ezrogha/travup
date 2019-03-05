import * as types from "./types";
import Realm from "realm";
import {
  databaseOptions,
  USER_SCHEMA,
  VEHICLE_SCHEMA,
  VEHICLES_SCHEMA
} from "../database/schemas";

export const onChangeName = name => {
  return {
    type: types.CHANGE_NAME,
    payload: name
  };
};

export const onChangeContact = contact => {
  return {
    type: types.CHANGE_CONTACT,
    payload: contact
  };
};

export const onChangeEmail = email => {
  return {
    type: types.CHANGE_EMAIL,
    payload: email
  };
};

export const onChangeCity = city => {
  return {
    type: types.CHANGE_CITY,
    payload: city
  };
};

export const onChangeVehicleType = type => {
  return {
    type: types.CHANGE_VEHICLE_TYPE,
    payload: type
  };
};

export const onChangeVehicleGear = gear => {
  return {
    type: types.CHANGE_GEAR,
    payload: gear
  };
};

export const onChangeVehicleWD = wd => {
  return {
    type: types.CHANGE_WHEEL_DRIVE,
    payload: wd
  };
};

export const onChangeFuel = fuel => {
  return {
    type: types.CHANGE_FUEL,
    payload: fuel
  };
};

export const onChangeSeaters = seaters => {
  return {
    type: types.CHANGE_SEATERS,
    payload: seaters
  };
};

export const onChangeVehicleRegistration = registration => {
  return {
    type: types.CHANGE_VEHICLE_REGISTRATION,
    payload: registration
  };
};

export const onChangeVehicleBrand = brand => {
  return {
    type: types.CHANGE_VEHICLE_BRAND,
    payload: brand
  };
};

export const onChangeVehicleModel = model => {
  return {
    type: types.CHANGE_VEHICLE_MODEL,
    payload: model
  };
};

export const onChangeVehicleMake = make => {
  return {
    type: types.CHANGE_VEHICLE_MAKE,
    payload: make
  };
};

export const onChangeComment = comment => {
  return {
    type: types.CHANGE_COMMENT,
    payload: comment
  };
};

export const addVehicleId = vehicleId => {
  return {
    type: types.CREATE_VEHICLE_ID,
    payload: vehicleId
  };
};

export const onChangePictureSrc = (picNum, picSrc) => {
  return dispatch => {
    switch (picNum) {
      case 1:
        dispatch({
          type: types.CHANGE_PICTURESRC1,
          payload: picSrc
        });
        break;

      case 2:
        dispatch({
          type: types.CHANGE_PICTURESRC2,
          payload: picSrc
        });
        break;

      case 3:
        dispatch({
          type: types.CHANGE_PICTURESRC3,
          payload: picSrc
        });
        break;

      case 4:
        dispatch({
          type: types.CHANGE_PICTURESRC4,
          payload: picSrc
        });
        break;

      case 5:
        dispatch({
          type: types.CHANGE_PICTURESRC5,
          payload: picSrc
        });
        break;

      default:
        break;
    }
  };
};

export const onRegisterVehicle = (vehicleData, userId) => {
  return dispatch => {
    dispatch({ type: types.REGISTER_START });

    const {
      city,
      type,
      gear,
      wheel_drive,
      fuel,
      seaters,
      vehicle_registration,
      vehicle_brand,
      vehicle_model,
      vehicle_make,
      comment,
      available,
      pictureSrc
    } = vehicleData;

    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          const activeUser = realm.objectForPrimaryKey(USER_SCHEMA, userId)
          const newVehicle = {
            id: Math.floor(Date.now() / 1000),
            ownerid: activeUser.id,
            name: activeUser.name,
            contact: activeUser.contact,
            email: activeUser.email,
            address: activeUser.address,
            city,
            type,
            gear,
            wheel_drive,
            fuel,
            seaters,
            vehicle_registration,
            vehicle_brand,
            vehicle_model,
            vehicle_make,
            pictureSrc1: JSON.stringify(pictureSrc['pictureSrc1']['uri']),
            pictureSrc2: JSON.stringify(pictureSrc['pictureSrc2']['uri']),
            pictureSrc3: JSON.stringify(pictureSrc['pictureSrc3']['uri']),
            pictureSrc4: JSON.stringify(pictureSrc['pictureSrc4']['uri']),
            pictureSrc5: JSON.stringify(pictureSrc['pictureSrc5']['uri']),
            comment,
            available
          };
          realm.create(VEHICLE_SCHEMA, newVehicle)
          // alert(JSON.stringify(newVehicle))
          alert('write success')
        })
      })
      .catch(err => {
        dispatch({ type: types.REGISTER_FAIL });
        alert('Write failed');
      });
  };
};
