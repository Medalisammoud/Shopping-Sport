import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer"
import productReducer from "./productReducer"

const rootReducer = combineReducers({ userReducer, categoryReducer, productReducer });
export default rootReducer;