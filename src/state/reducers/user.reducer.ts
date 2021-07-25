import { UserActionType } from "../action-types";
import { User, UserAction } from "../actions";

export interface IDefaultState {
  users: User[] | [];
  loading: boolean;
}
const defaultState: IDefaultState = {
  users: [],
  loading: false,
};

export const userReducer = (
  state: IDefaultState = defaultState,
  action: UserAction
) => {
  switch (action.type) {
    case UserActionType.USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case UserActionType.USER_ERROR:
      return {
        ...state,
        loading: true,
      };

    case UserActionType.USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };

    case UserActionType.USER_UPDATED:
      const users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.active = action.payload.active;
        }
        return user;
      });
      return {
        users: users,
        loading: false,
      };

    default:
      return state;
  }
};
