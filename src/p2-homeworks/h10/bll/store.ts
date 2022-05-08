import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore as createStore} from "redux";

const reducers = combineReducers({
    isLoading: loadingReducer,

})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
