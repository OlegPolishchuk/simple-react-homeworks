import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore as createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import { ThunkAction } from 'redux-thunk';
import {requestReducer} from "../../h13/bll/requestResucer";

const reducers = combineReducers({
    isLoading: loadingReducer,
    theme: themeReducer,
    request: requestReducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch


// @ts-ignore
window.store = store // for dev
