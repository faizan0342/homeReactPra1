import {PRODUCTS} from "../types"

export const productReducer = (state = {} , action) => {
    switch(action.type){
        case PRODUCTS :
            return{
                products : action.payload
            }
            default :
            return state
    }
} 