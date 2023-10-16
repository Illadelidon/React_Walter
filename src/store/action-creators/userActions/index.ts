import { UserActionTypes, UserActions } from "../../reducers/userReducer/types";
import { Dispatch } from "redux"
import { toast } from "react-toastify"
import jwtDecode from "jwt-decode"

// Import services
import { adduser, deleteuser, getAll, login, logout, removeTokens, setAccessToken, setRefreshToken, updatepassword, updateuser } from "../../../services/api-user-service";

export const LoginUser = (user : any) => {
    return async(dispatch: Dispatch<UserActions>) => {
         try{
            dispatch({type: UserActionTypes.START_REQUEST});
            const data = await login(user);
            const { response } = data;
            if(!response.success){
               dispatch({type: UserActionTypes.LOGIN_USER_ERROR, payload: response.message})
               toast.error(response.message)
            }
            else{
               toast.success(response.message)
               const { accessToken, refreshToken, message } = response;
               setAccessToken(accessToken);
               setRefreshToken(refreshToken);
               AuthUser(accessToken, message, dispatch);
            }
         }
         catch(e){
            dispatch({type: UserActionTypes.SERVER_ERROR, payload: "Unknown error!"})
         }
    }
}


export const AddUser = (user: any) => {
   return async (dispatch: Dispatch<UserActions>) => {
     try {
       dispatch({ type: UserActionTypes.START_REQUEST });
       const data = await adduser(user);
       const { response } = data;
       if (!response.isSuccess) {
         toast.error(response.message);
       } else {
         toast.success(response.message);
         dispatch({
           type: UserActionTypes.ADD_USER_SUCCES,
           payload: response.message,
         });
       }
     } catch (e) {
       dispatch({
         type: UserActionTypes.SERVER_ERROR,
         payload: "Unknown error",
       });
     }
   };
 };


export const GetAll = () => {
   return async(dispatch: Dispatch<UserActions>) => {
      try{
         dispatch({type: UserActionTypes.START_REQUEST});
         const data = await getAll()
         const { response } = data;
         console.log("response ", response)
         if(response.success){
            dispatch({type: UserActionTypes.GET_ALL_SUCCESS, payload: {message: response.message, allUsers: response.payload}})
            toast.success(response.message)
         }
         else{
            toast.error(response.message)
            dispatch({type: UserActionTypes.SERVER_ERROR, payload: response.message})
         }
      }
      catch(e){
         dispatch({type: UserActionTypes.SERVER_ERROR, payload: "Unknown error!"})
      }
 }
}

export const DeleteUser = (id:any)=>{
  return async (dispatch:Dispatch<UserActions>)=>{
    const data = await deleteuser(id);
    const { response } = data;
    if(response.success) {
      dispatch({
        type:UserActionTypes.DELETE_USER_SUCCESS, payload:response.message
      });
    }
  }
}
export const UpdateUser = (user:any)=>{
  return async(dispatch:Dispatch<UserActions>)=>{
    const data= await updateuser(user);
    const {response} = data;
    if(response.success){
      dispatch({
        type:UserActionTypes.UPDATE_USER_SUCCESS,payload:response.message
      });
    }
  }
}



export const UpdatePassword = (user:any)=>{
  return async(dispatch:Dispatch<UserActions>)=>{
    const data = await updatepassword(user);
    const {response} = data;
    if(response.success){
      dispatch({
        type:UserActionTypes.UPDATE_USER_PASSWORD,payload:response.message
      });
    }
  }
}

export const LogOut = (id: string) => {
   return async (dispatch: Dispatch<UserActions>) => {
     const data = await logout(id);
     console.log("LogOut " + data)
     const { response } = data;
     if (response.success) {
       removeTokens();
       dispatch({
         type: UserActionTypes.LOGOUT_USER,
       });
     }
   };
 };

export const AuthUser = (token: string, message: string, dispatch: Dispatch<UserActions>) => {
   const decodedToken = jwtDecode(token) as any;
   dispatch({type: UserActionTypes.LOGIN_USER_SUCCESS, payload: {message, decodedToken}})
} 