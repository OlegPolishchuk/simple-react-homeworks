import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {requestAPI} from "../RequestAPI";
import {AppStoreType} from "../../h10/bll/store";

export enum RequestActionsTypeEnum {
    MAKE_POST_REQUEST = 'REQUEST/MAKE_POST_REQUEST',
    SET_RESPONSE = 'REQUEST/SET_RESPONSE',
    TOGGLE_IS_LOADING = 'REQUEST/TOGGLE_IS_LOADING'
}

type DataType = {
    errorText: string,
    info: string,
    yourBody: {success: boolean},
}

type ResponseType = {
    status: number,
    statusText: string,
    data: DataType
}


type InitStateType = {
    isSuccess: boolean,
    response: ResponseType | null,
    isLoading: boolean,
}

const initState: InitStateType = {
    isSuccess: true,
    response: null,
    isLoading: false
}


export const requestReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case RequestActionsTypeEnum.MAKE_POST_REQUEST:
            return {
                ...state,
                ...action.payload
            }

        case RequestActionsTypeEnum.TOGGLE_IS_LOADING:
            return {
                ...state,
                ...action.payload
            }

        case RequestActionsTypeEnum.SET_RESPONSE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export type ActionType = ToggleIsSuccessACType
    | SetResponseACType
    | ToggleIsLoadingACType

type ToggleIsSuccessACType = {
    type: RequestActionsTypeEnum.MAKE_POST_REQUEST,
    payload: {
        isSuccess: boolean
    }
}


export const toggleIsSuccess = (isSuccess: boolean): ToggleIsSuccessACType => {
    return {
        type: RequestActionsTypeEnum.MAKE_POST_REQUEST,
        payload: {isSuccess}
    }
}

type SetResponseACType = {
    type: RequestActionsTypeEnum.SET_RESPONSE,
    payload: { response: ResponseType }
}

export const setResponse = (response: ResponseType): SetResponseACType => {
    return {
        type: RequestActionsTypeEnum.SET_RESPONSE,
        payload: {response}
    }
}

type ToggleIsLoadingACType = {
    type: RequestActionsTypeEnum.TOGGLE_IS_LOADING,
    payload: {isLoading: boolean}
}

export const toggleIdLoading = (isLoading: boolean): ToggleIsLoadingACType => {
    return {
        type: RequestActionsTypeEnum.TOGGLE_IS_LOADING,
        payload: {isLoading}
    }
}


export const thunkMakePostRequest = (isSuccess: boolean): ThunkAction<void, AppStoreType, unknown, ActionType> => {
    return function (dispatch: Dispatch) {
        dispatch(toggleIdLoading(true))
        dispatch(toggleIsSuccess(isSuccess))
        requestAPI.postRequest(isSuccess)
            .then(res => {
                console.log(res)
                dispatch(setResponse((res)))
            })
            .catch(err => {
                console.warn(err)
                dispatch(setResponse((err.response)))
            })
            .finally(() => {
                dispatch(toggleIdLoading(false))
            })
    }
}