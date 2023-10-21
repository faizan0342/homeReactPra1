import { SORT_PRODUCTS } from "../types"

export const sizeProduct = (products ,size) => (dispatch) =>{
//    var products = products.slice()
//    var size = size
   var product = size === "" ? products : products.filter((x) => x.availableSizes.indexOf(size) >= 0)
   console.log("check data" , product)
    dispatch({
        type : SORT_PRODUCTS,
        payload : {
            size : size ,
            products : product
        } 
    })
}