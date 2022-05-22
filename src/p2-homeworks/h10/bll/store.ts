import {loadingReducer} from './loadingReducer'
import {Action, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {requestReducer} from "../../h13/bll/requestResucer";
import thunk, { ThunkDispatch } from 'redux-thunk';

const reducers = combineReducers({
    isLoading: loadingReducer,
    theme: themeReducer,
    request: requestReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkDispatch<AppStoreType, unknown, Action>

// @ts-ignore
window.store = store // for dev
