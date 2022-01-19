import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {modalReducer} from "../src/reducer/modalReducer"

const finalreducer = combineReducers({
    modalReducer
})

const store = createStore(finalreducer, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store