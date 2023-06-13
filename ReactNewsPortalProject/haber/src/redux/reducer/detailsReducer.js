import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function detailReducer(state = initialState.blog, action) {
  switch (action.type) {
    case actionTypes.GET_DETAILS:
        return action.payload;
    default:
      return state;
  }
}
