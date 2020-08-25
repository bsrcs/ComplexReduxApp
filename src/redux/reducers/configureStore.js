import {createStore, applyMiddleware} from "redux";
import rootReducer from "./index"
import thunk from "redux-thunk"

// bir fonk yardimiyla store olusturmak istedigimizi ve onun da
// rootReducer icerdigini soyluyoruz.
export default function configureStore(){
  return createStore(rootReducer, applyMiddleware(thunk))
}