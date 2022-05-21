
export enum RequestActionsTypeEnum {
    MAKE_POST_REQUEST = 'REQUEST/MAKE_POST_REQUEST'
}

const initState = {
    isSuccess: true
}

type InitStateType = typeof initState

export const requestReducer = (state: InitStateType = initState, action: ToggleIsSuccessACType): InitStateType => {
    switch (action.type){

        default: return state
    }
}

export type ActionType = ToggleIsSuccessACType

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