import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"

const rootReducer = combineReducers({
  changeCategoryReducer,
  //yeni reduceri ekle
  categoryListReducer
})

export default rootReducer;