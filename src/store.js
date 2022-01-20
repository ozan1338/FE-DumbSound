import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {modalReducer} from "../src/reducer/modalReducer"
import { loginReducer,registerUserReducer } from "./reducer/userReducer";
import { getAllMusicReducer, addMusicReducer } from "./reducer/musicReducer";
import { addPaymentReducer,getAllPaymentReducer,updateStatusPaymentReducer } from "./reducer/paymentReducer";
import { addArtistReducer, getAllArtistReducer } from "./reducer/artistReducer";

const finalreducer = combineReducers({
    modalReducer,
    loginReducer,
    registerUserReducer,
    getAllMusicReducer,
    addPaymentReducer,
    getAllPaymentReducer,
    updateStatusPaymentReducer,
    addArtistReducer,
    getAllArtistReducer,
    addMusicReducer
})

const currenUser = localStorage.getItem('currentUser') ? {login : true} : {};

const initialState = {
    loginReducer : currenUser
}

const store = createStore(finalreducer, initialState, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store