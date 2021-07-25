import axios from "axios";
import { Dispatch } from "redux";
import { UserActionType } from "../action-types";
import { UserAction } from "../actions";

export function updateUserStatus(id: string, status: boolean) {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const res = await axios.put(
        `http://sohail.users.challenge.dev.monospacelabs.com/users/${id}`,
        { id, active: status }
      );

      dispatch({
        type: UserActionType.USER_UPDATED,
        payload: res.data,
      });
    } catch (e) {
      dispatch({ type: UserActionType.USER_ERROR });
    }
  };
}
