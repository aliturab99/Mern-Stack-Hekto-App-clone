import { categoryActionTypes } from "../actions/categoryActions";

const initialState = {
    categories: [],
    totalRecords: 0,
    allRecordsLoaded: false,
    paginationArray: []
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case categoryActionTypes.ADD_CATEGORY :
        return {
          ...state,
          categories: [...state.categories, action.category]
        }
      case categoryActionTypes.CATEGORIES_LIST:
        let updatedCategoriesArray = [...state.categories, ...action.payload.categories];
        let oldPaginationArray = state.paginationArray;
        let newPageRecord = { startIndex: state.categories.length,  endIndex: updatedCategoriesArray.length};
        oldPaginationArray[action.payload.page] = newPageRecord;

        return {
            ...state,
            totalRecords: action.payload.totalRecords,
            allRecordsLoaded: action.payload.allRecordsLoaded,
            categories: updatedCategoriesArray,
            paginationArray: oldPaginationArray
        }
        default:
            return state;
    }
}

export default categoryReducer