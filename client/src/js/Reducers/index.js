import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer"
import productReducer from "./productReducer"
import orderReducer from './orderReducer'

const rootReducer = combineReducers({ userReducer, categoryReducer, productReducer, orderReducer });
export default rootReducer;