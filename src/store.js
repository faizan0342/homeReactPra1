import { createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from 'redux-thunk';

import {productsReducer} from "./reducer/productReducer"
import { productSize } from "./reducer/filterReducer";

// Correct the function name here
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const store = createStore(
  combineReducers({
    products: productsReducer,
    size : productSize
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;