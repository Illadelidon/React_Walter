import { type } from "os";

export interface UserState{
    user: any,
    message: null | string,
    loading: boolean,
    error: null | string,
    isAuth: boolean,
    selectedUser: any,
    allUsers: [],
    
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
    DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
    UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"
    
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
    payload:string;
}
interface DeleteUserSuccess{
    type:UserActionTypes.DELETE_USER_SUCCESS,
    payload:any;
}

interface UpdateUserSuccess{
    type:UserActionTypes.UPDATE_USER_SUCCESS,
    payload:any;
}


export type UserActions = UpdateUserSuccess | DeleteUserSuccess |AddUserSucces| GetAllSuccessAction | LogoutUserAction |  StartRequestAction | FinishRequestAction | LoginUserSuccessAction | LoginUserErrorAction | ServerErrorAction

