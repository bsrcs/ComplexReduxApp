import {createStore} from "redux";
import rootReducer from "./index"

// bir fonk yardimiyla store olusturmak istedigimizi ve onun da
// rootReducer icerdigini soyluyoruz.
export default function configureStore(){
  return createStore(rootReducer)
}