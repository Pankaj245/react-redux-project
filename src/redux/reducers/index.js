import { combineReducers } from "redux";
import { productreducer, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
  allProducts: productreducer,
  product: selectedProductReducer,
});
