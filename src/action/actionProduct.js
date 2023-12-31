import {FETCH_PRODUCTS} from "../types"

export const fetchProducts = () => async(dispatch) => {
    const res = await fetch("/api/products");
    var data = await res.json();
    
    dispatch({
        type : FETCH_PRODUCTS,
        payload : data,
    })
}
