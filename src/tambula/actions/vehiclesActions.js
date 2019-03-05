import Realm from "realm";
import { databaseOptions, VEHICLE_SCHEMA } from "../database/schemas";
import * as types from "./types";

export const fetchVehicles = () => {
  return dispatch => {
    dispatch({ type: types.START_FETCH_VEHICLES });

    Realm.open(databaseOptions)
      .then(realm => {
        let allVehicles = realm.objects(VEHICLE_SCHEMA);
        dispatch({ type: types.FETCH_VEHICLES_SUCCESS, payload: allVehicles });
      })
      .catch(error => {
        dispatch({ type: types.FETCH_VEHICLES_ERROR, payload: error });
      });
  };
};

