import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"

const rootReducer = combineReducers({
  changeCategoryReducer,
  //yeni reduceri ekle
  categoryListReducer,
  productListReducer
})

export default rootReducer;