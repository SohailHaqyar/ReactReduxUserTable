import { UserActionType } from "../action-types";

export type UserAdminType =
  | "Supervisor"
  | "Stakeholder"
  | "Guest"
  | "Employee";

export interface User {
  active: boolean;
  name: string;
  email: string;
  phone: string;
  type: UserAdminType;
  id: string;
}

export interface UserUpdateAction {
  type: UserActionType.USER_UPDATED;
  payload: User;
}

export interface UserLoadingAction {
  type: UserActionType.USER_LOADING;
}

export interface UserSuccessAction {
  type: UserActionType.USER_SUCCESS;
  payload: User[];
}

export interface UserErrorAction {
  type: UserActionType.USER_ERROR;
}

export type UserAction =
  | UserLoadingAction
  | UserSuccessAction
  | UserErrorAction
  | UserUpdateAction;
