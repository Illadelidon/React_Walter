import { type } from "os";

export interface UserState{
    user: any,
    message: null | string,
    loading: boolean,
    error: null | string,
    isAuth: boolean,
    selectedUser: any,
    allUsers: [],
    adduser:any
}

export enum UserActionTypes {
    START_REQUEST = "START_REQUEST",
    FINISHED_REQUEST = "FINISHED_REQUEST",
    LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
    LOGIN_USER_ERROR = "LOGIN_USER_ERROR",
    SERVER_ERROR = "SERVER_ERROR",
    LOGOUT_USER = "LOGOUT_USER",
    GET_ALL_SUCCESS = "GET_ALL_SUCCESS",
    ADD_USER_SUCCES = "ADD_USER_SUCCES",
    ADD_USER_ERROR = "ADD_USER_ERROR"
}

interface StartRequestAction {
    type: UserActionTypes.START_REQUEST
}

interface GetAllSuccessAction{
    type: UserActionTypes.GET_ALL_SUCCESS,
    payload: any
}

interface LogoutUserAction {
    type: UserActionTypes.LOGOUT_USER;
  }
  

interface FinishRequestAction {
    type: UserActionTypes.FINISHED_REQUEST
}

interface LoginUserSuccessAction{
    type: UserActionTypes.LOGIN_USER_SUCCESS,
    payload: any
}

interface LoginUserErrorAction{
    type: UserActionTypes.LOGIN_USER_ERROR,
    payload: any
}

interface ServerErrorAction{
    type: UserActionTypes.SERVER_ERROR,
    payload: any
}
interface AddUserSucces{
    type:UserActionTypes.ADD_USER_SUCCES,
    payload:any
}
interface AddUserError{
    type:UserActionTypes.ADD_USER_ERROR,
    payload:any
}

export type UserActions = AddUserError |AddUserSucces| GetAllSuccessAction | LogoutUserAction |  StartRequestAction | FinishRequestAction | LoginUserSuccessAction | LoginUserErrorAction | ServerErrorAction

