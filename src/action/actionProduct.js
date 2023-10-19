import {PRODUCTS} from "../types"

export const fetchProduct = () => (dispatch) => {
    var res = fetch("/api/products")

    dispatch({
        type : PRODUCTS,
        payload : res
    })
}
