import { createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from 'redux-thunk';
import { productReducer } from "./reducer/productReducer";

// Correct the function name here
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const store = createStore(
  combineReducers({
    products: productReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;