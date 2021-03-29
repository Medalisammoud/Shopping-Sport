import axios from "axios"
import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, SIGNIN_USER, SIGNUP_USER } from "../Constants/actionTypes"

//signup
export const signup = (newUser, history) => async (dispatch) => {
    dispatch({ type : LOAD_USER });
    try {
        const result = await axios.post('/api/user/signup', newUser);
        dispatch({ type : SIGNUP_USER, payload : result.data });
        history.push('/profile');
    } catch (error) {
        console.log(error.response.data.errors);
        dispatch({ type: FAIL_USER, payload: error.response.data.errors })
    }
}

//signin
export const signin = (user, history) => async (dispatch) =>{
    dispatch({ type: LOAD_USER });

    try {
        const result = await axios.post("/api/user/signin", user);
        dispatch({ type: SIGNIN_USER, payload: result.data })
        history.push("/profile");
    } catch (error) {
        console.log(error.response.data.errors);
        dispatch({ type: FAIL_USER, payload: error.response.data.errors })
    }
}

//current user token
export const currentUser = () => async (dispatch) => {
    try {
      const options = {
        headers: { Authorization: localStorage.getItem("token") },
      };
      const result = await axios.get("/api/user/current", options);
      dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data });
    }
  };

//Update User
export const updateUser = ( id, newContact ) => async (dispatch) =>{
    try {
        await axios.put(`/contact/${id}`, newContact)
        dispatch(currentUser())
    } catch (error) {
        console.log(error)
    }
}

//logout
export const logout = () => {
    return {
      type: LOGOUT_USER,
    };
  };

//vide errors
export const videErrors = () => {
    return {
      type: "VIDE_ERRORS",
    };
  };