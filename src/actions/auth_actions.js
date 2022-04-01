import AsyncStorage from "@react-native-async-storage/async-storage";
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";

import { Facebook } from "expo";

// AsyncStorage.setItem('key', 'value'); AsyncStorage.getItem('key');
export const facebookLogin = () => async (dispatch) => {
  let token = await AsyncStorage.getItem("fb_token");
  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // start up facebook login
    handleFacebookLogin(dispatch);
  }
};

const handleFacebookLogin = async (dispatch) => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    "1800842623447611",
    { permissions: ["public_profile"] }
  );
  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
};
