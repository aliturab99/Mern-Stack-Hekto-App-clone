import axios from "axios";
import { showSuccess } from "./alertActions";

export const authActionsType = {
    SIGN_IN: "signIn",
    SIGN_OUT: "signOut",
    AUTH_LOADED: "authLoaded",
    AUTH_FAILED: "authFailed",
    LOAD_TOKEN: "loadToken",
    AUTH_UPDATED: "authUpdated"
}

export const signin = (user, token) => {
    localStorage.setItem("token", token)
    return (
        {
            type: authActionsType.SIGN_IN,
            user,
            token
        }
    )
}

export const signOut = () => {
    localStorage.removeItem("token")
    return{
        type: authActionsType.SIGN_OUT
    }
}

export const loadAuth = () => {
    return (dispatch, getState) => {

        const token = localStorage.getItem("token");
        if (!token) return dispatch({ type: authActionsType.AUTH_FAILED })
        dispatch({
            type: authActionsType.LOAD_TOKEN,
            token: token ? token : null
        })


        axios.get("api/users/profile").then(({ data }) => {
            dispatch({
                type: authActionsType.AUTH_LOADED,
                user: data.user
            })
        }).catch(err => console.log(err))
    }
}

export const authUpdate = (user) => ({type: authActionsType.AUTH_UPDATED, user})