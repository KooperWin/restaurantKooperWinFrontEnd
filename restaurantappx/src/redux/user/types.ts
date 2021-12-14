import { Action } from "redux";
import { Restaurant } from "../../models/restaurants/types";
import { User } from "../../models/user/types";

//tipos de datos
export interface userState {
  info: Omit<Partial<User>, "password">;
}

export interface RestaurantState {
  info: Omit<Partial<Restaurant>, "image_url">;
}

export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const SIGNIN_REQUESTED = "SIGNIN_REQUESTED";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_ERROR = "SIGNIN_ERROR";

export const LOG_OUT_ERROR = "LOG_OUT_ERROR";
export const LOG_OUT_REQUESTED = "LOG_OUT_REQUESTED";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";

export const REGISTER_REQUESTED = "REGISTER_REQUESTED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

//acciones del usuario

export interface userSigninRequested extends Action {
  type: typeof SIGNIN_REQUESTED;
  payload: Partial<User>;
}

export interface userSigninSuccess extends Action {
  type: typeof SIGNIN_SUCCESS;
  payload: User;
}

export interface userLoginRequested extends Action {
  type: typeof LOGIN_REQUESTED;
  payload: Partial<User>;
}
export interface userLoginSuccess extends Action {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

export interface userLogoutSuccess extends Action {
  type: typeof LOG_OUT_SUCCESS;
}

export interface RestaurantRegisterRequested extends Action {
  type: typeof REGISTER_REQUESTED;
  payload: Partial<Restaurant>;
}
export interface RestaurantRegisterSuccess extends Action {
  type: typeof REGISTER_SUCCESS;
  payload: Restaurant;
}

export type userAction =
  | userLoginSuccess
  | userLogoutSuccess
  | userSigninRequested
  | userSigninSuccess;

export type RestaurantAction =
  | RestaurantRegisterSuccess
  | RestaurantRegisterRequested;
