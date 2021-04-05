import { FAIL_PRODUCT, GET_ALL_PRODUCT, LOAD_PRODUCT } from "../Constants/actionTypes";


const initialState={
    products:[],
    loadProduct : false,
    errors : {}
}


const productReducer = (state = initialState,{type, payload}) =>{
    switch (type) {
        case LOAD_PRODUCT:
            return { ...state, loadProduct : true };
        case GET_ALL_PRODUCT :
            return {
                ...state,
                products : payload.products,
                loadProduct : false,
                errors : {}
            };
        case FAIL_PRODUCT:
            return {
                ...state,
                errors : payload
            }
        default:
            return state;
    }
}

export default productReducer;