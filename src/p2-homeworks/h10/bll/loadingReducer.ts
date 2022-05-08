export enum LoadingReducerActionsTypeEnum {
    TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING',
}

const initState = {
    isLoading: false
}

export type InitialStateType = typeof initState

export const loadingReducer = (state = initState, action: LoadingACType): InitialStateType => {
    switch (action.type) {
        case LoadingReducerActionsTypeEnum.TOGGLE_IS_LOADING:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


export type LoadingACType = {
    type: LoadingReducerActionsTypeEnum.TOGGLE_IS_LOADING,
    payload: { isLoading: boolean }
}

export const loadingAC = (isLoading: boolean): LoadingACType => {
    return {
        type: LoadingReducerActionsTypeEnum.TOGGLE_IS_LOADING,
        payload: {isLoading}
    }
}