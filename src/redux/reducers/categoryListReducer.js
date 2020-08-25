import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialStage";


export default function changeCategoryReducer(state=initialState.categories,action){
  switch (action.type) {
    // Eger gelen actionType "GET_CATEGORIES_SUCCESS" ise o zaman payloadu dondur.
    // API'den gelen o payloaddaki karaterler benim state'im olur. 
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}