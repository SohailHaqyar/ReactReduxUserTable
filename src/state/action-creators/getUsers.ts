import axios from "axios";
import { Dispatch } from "redux";
import { UserActionType } from "../action-types";
import { UserAction } from "../actions";

export function getUsers() {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.USER_LOADING });
      const res = await axios.get(
        "http://sohail.users.challenge.dev.monospacelabs.com/users"
      );
      dispatch({
        type: UserActionType.USER_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({ type: UserActionType.USER_ERROR });
    }
  };
}
