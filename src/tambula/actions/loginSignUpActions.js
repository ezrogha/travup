import {
  CHANGE_LOGIN_EMAIL,
  CHANGE_LOGIN_PASSWORD,
  CHANGE_SIGNUP_NAME,
  CHANGE_SIGNUP_CONTACT,
  CHANGE_SIGNUP_EMAIL,
  CHANGE_SIGNUP_ADDRESS,
  CHANGE_SIGNUP_PASSWORD,
  CHANGE_SIGNUP_CONFIRM_PASSWORD,
  START_SIGNUP,
  COMPLETE_SIGNUP,
  ERROR_SIGNUP,
  START_LOGIN,
  WRONG_PASSWORD,
  LOGIN_SUCCESS,
  VOID_USER
} from "./types";
import Realm from "realm";
import { databaseOptions, USER_SCHEMA } from "../database/schemas";

export const onChangeEmail = email => {
  return {
    type: CHANGE_LOGIN_EMAIL,
    payload: email
  };
};

export const onChangePassword = password => {
  return {
    type: CHANGE_LOGIN_PASSWORD,
    payload: password
  };
};

export const onChangeSignupName = name => {
  return {
    type: CHANGE_SIGNUP_NAME,
    payload: name
  };
};

export const onChangeSignupContact = contact => {
  return {
    type: CHANGE_SIGNUP_CONTACT,
    payload: contact
  };
};

export const onChangeSignupEmail = email => {
  return {
    type: CHANGE_SIGNUP_EMAIL,
    payload: email
  };
};

export const onChangeSignupAddress = address => {
  return {
    type: CHANGE_SIGNUP_ADDRESS,
    payload: address
  };
};

export const onChangeSignupPassword = password => {
  return {
    type: CHANGE_SIGNUP_PASSWORD,
    payload: password
  };
};

export const onChangeSignupConfirmPassword = confirmPassword => {
  return {
    type: CHANGE_SIGNUP_CONFIRM_PASSWORD,
    payload: confirmPassword
  };
};

export const onSignupUser = userData => {
  return dispatch => {
    dispatch({ type: START_SIGNUP });

    const { name, contact, email, address, password } = userData;
    const newUser = {
      id: Math.floor(Date.now() / 1000),
      name,
      contact,
      email,
      address,
      password
    };

    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(USER_SCHEMA, newUser);
          alert("Write Success");
          dispatch({ type: COMPLETE_SIGNUP });
        });
      })
      .catch(error => {
        alert("Write Failed");
        dispatch({ type: ERROR_SIGNUP });
      });
  };
};

export const onLoginUser = userData => {
  return dispatch => {

    dispatch({ type: START_LOGIN });

    Realm.open(databaseOptions)
      .then(realm => {
        allUsers = realm.objects(USER_SCHEMA);
        userList = Object.values(allUsers);
        const user = getUser(userData, userList)

        if(user){
          userpass = user.password
          enteredpass = userData.password
          if(userpass == enteredpass){
            dispatch({ type: LOGIN_SUCCESS, payload: user.id })
          } else {
            dispatch({ type: WRONG_PASSWORD })
          }
        } else {
          dispatch({ type: VOID_USER })
        }
        
      })
      .catch(err => alert(JSON.stringify(err)));
  };
};

const getUser = ({ email }, userList) => {
  let currentUser = null
  userList.forEach(user => {
    if (user.email === email) {
      currentUser = user
    }
  })
  return currentUser
}
