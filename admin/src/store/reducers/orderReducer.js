import { orderActionTypes } from "../actions/orderActions";

const initialState = {
    orders: [],
    totalRecords: 0,
    allRecordsLoaded: false,
    paginationArray: [],
    rowsPerPage: process.env.REACT_APP_RECORDS_PER_PAGE,
    paginationCurrentPage: 0
}

function orderReducer(state = initialState, action) {
    switch (action.type) {
        case orderActionTypes.ADD_ORDER:
            let newOrdersArray = [...state.products];
            let oldPaginations = [...state.paginationArray];
            let lastPaginationPage = Math.ceil(parseInt(state.totalRecords) / parseInt(state.rowsPerPage)) - 1;
            let updatedAllRecordsLoaded = state.allRecordsLoaded;
            let updatedPaginationCurrentPage = state.paginationCurrentPage;
            let updatedTotalRecords =  state.totalRecords;

            if (lastPaginationPage < 0) {
                updatedAllRecordsLoaded = false;
            }
            else
                updatedTotalRecords = state.totalRecords + 1;

            if (oldPaginations[lastPaginationPage]) // if user already clicked on last page
            {
                let lastPaginationRecord = oldPaginations[lastPaginationPage];
                let lastPaginationStartIndex = lastPaginationRecord.startIndex;
                let lastPaginationEndIndex = lastPaginationRecord.endIndex;

                let lastPaginationPageAfterNewRecord = Math.ceil(parseInt(state.totalRecords + 1) / parseInt(state.rowsPerPage)) - 1;

                if (lastPaginationPageAfterNewRecord !== lastPaginationPage) // if last page is not equal to newly calculated page, it means we have to add new page to pagination array
                {
                    let totalRowsPerPage = parseInt(state.rowsPerPage);

                    newOrdersArray = [...state.orders, action.payload];
                    oldPaginations[lastPaginationPageAfterNewRecord] = { startIndex: newOrdersArray.length - 1, endIndex: newOrdersArray.length + totalRowsPerPage }

                    for (let index = 1; index < totalRowsPerPage; index++) {
                        newOrdersArray.push(null);
                    }
                }
                else { // update the records array index to insert record at index which is null
                    for (let index = lastPaginationStartIndex; index < lastPaginationEndIndex; index++) {
                        if (!newOrdersArray[index]) {
                            newOrdersArray[index] = action.payload;
                            break;
                        }
                    }
                }
            }

            return {
                ...state,
                orders: newOrdersArray,
                totalRecords: updatedTotalRecords,
                paginationArray: oldPaginations,
                allRecordsLoaded: updatedAllRecordsLoaded,
                paginationCurrentPage: updatedPaginationCurrentPage
            }
        case orderActionTypes.ORDERS_LOADED:
            let updatedOrdersArray = [...state.orders, ...action.payload.orders];
            let oldPaginationArray = [...state.paginationArray];

            let totalRowsPerPage = parseInt(state.rowsPerPage);
            if (action.payload.orders.length < totalRowsPerPage) {
                const totalNullRecordsToInsert = totalRowsPerPage - action.payload.orders.length;

                for (let index = 0; index < totalNullRecordsToInsert; index++) {
                    updatedOrdersArray.push(null);
                }
            }


            if (action.payload.orders) {
                let newPageRecord = { startIndex: state.orders.length, endIndex: updatedOrdersArray.length };
                oldPaginationArray[action.payload.page] = newPageRecord;
            }

            return {
                ...state,
                totalRecords: action.payload.totalRecords,
                allRecordsLoaded: action.payload.allRecordsLoaded,
                orders: updatedOrdersArray,
                paginationArray: oldPaginationArray
            }
        case orderActionTypes.EDIT_ORDER:
            let newOrdersForEditOrder = [...state.orders];
            newOrdersForEditOrder[action.payload.orderIndex] = action.payload.order;
            return {
                ...state,
                orders: newOrdersForEditOrder
            }

        case orderActionTypes.RESET_ORDER:
            return initialState
        case orderActionTypes.UPDATE_ROWS_PERPAGE:
            return { ...state, rowsPerPage: action.payload }
        case orderActionTypes.UPDATE_PAGINATION_CURRENT_PAGE:
            return {
                ...state,
                paginationCurrentPage: action.payload
            }
        default:
            return state;
    }
}

export default orderReducer