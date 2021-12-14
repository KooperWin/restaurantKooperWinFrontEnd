import { Reducer } from "redux";
import { POP_LOADING, uiAction, uiState, PUSH_LOADING } from "./types";

export const initialState: uiState = {
  loading: [],
};

export const uiReducer: Reducer<uiState, uiAction> = (
  state: uiState = initialState,
  action: uiAction
): uiState => {
  switch (action.type) {
    case PUSH_LOADING:
      state.loading.push(true);
      return {
        loading: [...state.loading],
      };
    case POP_LOADING:
      state.loading.pop();
      return {
        loading: [...state.loading],
      };
    default:
      return state;
  }
};
