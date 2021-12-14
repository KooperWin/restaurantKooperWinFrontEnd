import { Restaurant } from "../../models/restaurants/types";
import { User } from "../../models/user/types";
import {
  LOG_OUT_SUCCESS,
  LOGIN_SUCCESS,
  userLoginSuccess,
  userLogoutSuccess,
  userLoginRequested,
  LOGIN_REQUESTED,
  SIGNIN_REQUESTED,
  SIGNIN_SUCCESS,
  userSigninRequested,
  userSigninSuccess,
  RestaurantRegisterRequested,
  REGISTER_REQUESTED,
  RestaurantRegisterSuccess,
  REGISTER_SUCCESS,
} from "./types";

export const loginRequested = (logUser: Partial<User>): userLoginRequested => ({
  type: LOGIN_REQUESTED,
  payload: logUser,
});
export const signinSuccess = (newUser: User): userSigninSuccess => ({
  type: SIGNIN_SUCCESS,
  payload: newUser,
});
export const signinRequested = (
  signUser: Partial<User>
): userSigninRequested => ({
  type: SIGNIN_REQUESTED,
  payload: signUser,
});

export const registerSuccess = (
  newRestaurant: Restaurant
): RestaurantRegisterSuccess => ({
  type: REGISTER_SUCCESS,
  payload: newRestaurant,
});
export const registerRequested = (
  logRestaurant: Partial<Restaurant>
): RestaurantRegisterRequested => ({
  type: REGISTER_REQUESTED,
  payload: logRestaurant,
});

export const loginSuccess = (newUser: User): userLoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload: newUser,
});

export const logoutSuccess = (): userLogoutSuccess => ({
  type: LOG_OUT_SUCCESS,
});
