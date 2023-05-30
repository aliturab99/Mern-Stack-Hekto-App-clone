import axios from "axios";
import { showError } from "./alertActions";
import { hideProgressBar, showProgressBar } from "./progressActions";

export const storeActionTypes = {
    "EDIT_STORE": "EDIT_STORE",
    "STORE_LOADED": "STORE_LOADED",
  }


//Load All stores
export const loadStore = () => {
  return (dispatch, getState) => {
    axios.get('api/store').then(({ data }) => {
      dispatch({ type: storeActionTypes.STORE_LOADED, payload: data });
    }).catch(err => {
      dispatch(hideProgressBar());
      dispatch(showError(err.response && err.response.data.message ? err.response.data.message : err.message));
    });
  }
}
