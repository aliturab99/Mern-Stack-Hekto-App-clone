import { showError } from "./alertActions";
import { hideProgressBar, showProgressBar } from "./progressActions";
import axios from 'axios';

export const categoryActionTypes = {
  "ADD_CATEGORY": "addCategory",
  "UPDATE_CATEGORY": "updateCategory",
  "DELETE_CATEGORY": "deleteCategory",
  'CATEGORIES_LIST' : 'category List',
}

export const addCategory = (category) => {
  return {
    type: categoryActionTypes.ADD_CATEGORY,
    category
  }
}

export const loadCategories = (currentPage = 1, recordsPerPage = process.env.REACT_APP_RECORDS_PER_PAGE) => {
  return (dispatch, getState) => {
    const state = getState();

    if (state.categories.allRecordsLoaded) // don't send request again and again if all records have loaded
      return;

    let skipRecords = 0;
    if (state.categories.categories.length === 0) {
      dispatch(showProgressBar());
    }
    else
      skipRecords = (currentPage) * recordsPerPage;

    axios.get('api/category', { params: { skip: skipRecords, limit: recordsPerPage} }).then(({ data }) => {
      const state = getState();
      if (state.categories.categories.length === 0)
        dispatch(hideProgressBar());

      const allRecordsLoaded = (state.categories.categories.length + data.categories.length ) === data.totalRecords;
      dispatch({ type: categoryActionTypes.CATEGORIES_LIST, payload: { categories: data.categories, totalRecords: data.totalRecords, allRecordsLoaded, page: currentPage } });
    }).catch(err => {
      console.log(err)
      dispatch(hideProgressBar());
      dispatch(showError(err.response && err.response.data.message ? err.response.data.message : err.message));
    });
  }
}