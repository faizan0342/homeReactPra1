import {SORT_PRODUCTS} from "../types"

export const productSize = (state = {} , action) => {
    // console.log("reducer ==>" , action.payload)
    switch(action.type){
        case SORT_PRODUCTS :
            return{
                ...state,
                items : action.payload.products,
                size : action.payload.size
            }
            default :
            return state
    }
} 