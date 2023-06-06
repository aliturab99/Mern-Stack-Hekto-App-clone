import axios from "axios";
import { showError, showSuccess } from "./alertActions";
import { hideProgressBar, showProgressBar } from "./progressActions";

export const orderActionTypes = {
  "ADD_ORDER": "ADD_ORDER",
  "EDIT_ORDER": "EDIT_ORDER",
  "ORDERS_LOADED": "ORDERS_LOADED",
  "RESET_ORDER": "RESET_ORDER",
  "UPDATE_ROWS_PERPAGE": "UPDATE_ROWS_PERPAGE",
  "UPDATE_PAGINATION_CURRENT_PAGE": "UPDATE_PAGINATION_CURRENT_PAGE",
}





//Load All stores
export const loadOrders = (currentPage = 1, recordsPerPage = process.env.REACT_APP_RECORDS_PER_PAGE) => {
  return (dispatch, getState) => {
    const state = getState();

    if (state.orders.allRecordsLoaded) // don't send request again and again if all records have loaded
      return;

    let skipRecords = 0;
    if (state.orders.orders.length === 0)
      dispatch(showProgressBar());

    skipRecords = (parseInt(currentPage)) * parseInt(recordsPerPage);

    axios.get('/api/orders/all', { params: { skip: skipRecords, limit: recordsPerPage } }).then(({ data }) => {
      const state = getState();
      if (state.orders.orders.length === 0)
        dispatch(hideProgressBar());

      if (data.totalRecords === 0) return;

      const allRecordsLoaded = (state.orders.orders.length + data.orders.length) === data.totalRecords;
      dispatch({ type: orderActionTypes.ORDERS_LOADED, payload: { orders: data.orders, totalRecords: data.totalRecords, allRecordsLoaded, page: currentPage } });
      dispatch({ type: orderActionTypes.UPDATE_PAGINATION_CURRENT_PAGE, payload: currentPage })
    }).catch(err => {
      dispatch(hideProgressBar());
      dispatch(showError(err.response && err.response.data.message ? err.response.data.message : err.message));
    });
  }
}


export const loadSingleOrder = (orderId) => {
  
  axios.get("api/orders/singleOrder", {orderId}).then( result => {

  }).catch(err => {
    console.log(err)
    // dispatch(hideProgressBar());
    // dispatch(showError(err.response && err.response.data.message ? err.response.data.message : err.message));
  });

}