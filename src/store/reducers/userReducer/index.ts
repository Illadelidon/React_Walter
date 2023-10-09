import { UserState, UserActions, UserActionTypes } from "./types";

const initialState: UserState = {
  user: {},
  message: null,
  loading: false,
  error: null,
  isAuth: false,
  selectedUser: null,
  allUsers: [],
  adduser:{}
};

const UserReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.START_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload.decodedToken,
        message: action.payload.message,
      };
    case UserActionTypes.FINISHED_REQUEST:
      return { ...state, loading: false };
    case UserActionTypes.LOGIN_USER_ERROR:
      return { ...state, loading: false, message: action.payload.message };
    case UserActionTypes.SERVER_ERROR:
      return { ...state, loading: false };
    case UserActionTypes.GET_ALL_SUCCESS:
      return { ...state, loading: false, allUsers: action.payload.allUsers, message: action.payload.message}  
    case UserActionTypes.ADD_USER_SUCCES:
      return {...state,loading:false,adduser: action.payload.adduser,message: action.payload.message}
    case UserActionTypes.ADD_USER_ERROR:
      return { ...state,loading:false,message:action.payload.message}
    case UserActionTypes.LOGOUT_USER:
      return {
        user: {},
        message: null,
        loading: false,
        error: null,
        isAuth: false,
        selectedUser: null,
        allUsers: [],
        adduser:{}
      };
    default:
      return state;
  }
};

export default UserReducer;
