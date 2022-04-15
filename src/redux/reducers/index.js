import { combineReducers } from "redux";
import { productReducer, selectedProdductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProdductReducer,
});

export default reducers;
