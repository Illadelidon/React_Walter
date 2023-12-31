import { UserState, UserActions, UserActionTypes } from "./types";

const initialState: UserState = {
  user: {},
  message: null,
  loading: false,
  error: null,
  isAuth: false,
  selectedUser: null,
  allUsers: [],
  
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
    case UserActionTypes.SET_SELECTED_USER:
      return{
        ...state,selectedUser:action.payload.id
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
      return {...state,loading:false,message: action.payload};
    case UserActionTypes.DELETE_USER_SUCCESS:
      return {...state,loading:false,message:action.payload};
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return {...state,loading:false,message:action.payload};
    case UserActionTypes.UPDATE_USER_PASSWORD:
      return {...state,loading:false,message:action.payload};
    case UserActionTypes.LOGOUT_USER:
      return {
        user: {},
        message: null,
        loading: false,
        error: null,
        isAuth: false,
        selectedUser: null,
        allUsers: [],
        
      };
    default:
      return state;
  }
};

export default UserReducer;
