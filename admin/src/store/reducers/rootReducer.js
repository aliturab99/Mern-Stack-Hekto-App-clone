import { combineReducers } from "redux";
import userReducer from "./userReducer";
import progressReducer from "./progressReducer"
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import reviewReducer from "./reviewReducer";
import orderReducer from "./orderReducer";

const allReducers = {
    users: userReducer,
    progressBar: progressReducer,
    alert: alertReducer,
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer,
    brands: brandReducer,
    reviews: reviewReducer,
    orders: orderReducer

}

const rootReducer = combineReducers(allReducers);

export default rootReducer;
