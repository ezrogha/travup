import Realm from 'realm';

export const USER_SCHEMA = 'user';
export const VEHICLE_SCHEMA = 'vehicle';
export const VEHICLES_SCHEMA = 'vehicles';

export const UserSchema = {
  name: USER_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    contact: 'string',
    email: 'string',
    address: 'string',
    password: 'string'
  }
}

export const VehicleSchema = {
  name: VEHICLE_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    ownerid: 'int',
    name: 'string',
    contact: 'string',
    email: 'string',
    address: 'string',
    city: 'string',
    type: 'string',
    gear: 'string',
    wheel_drive: 'string',
    fuel: 'string',
    seaters: 'string',
    vehicle_registration: 'string',
    vehicle_brand: 'string',
    vehicle_model: 'string',
    vehicle_make: 'string',
    pictureSrc1: 'string',
    pictureSrc2: 'string',
    pictureSrc3: 'string',
    pictureSrc4: 'string',
    pictureSrc5: 'string',
    comment: 'string',
    available: 'string'
  }
}

export const databaseOptions = {
  schema: [ UserSchema, VehicleSchema ],
  schemaVersion: 0
}

export default new Realm(databaseOptions)