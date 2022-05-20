export enum ThemeActionsTypeEnum {
    CHANGE_THEME = 'HW12/CHANGE_THEME'
}

const initState = {
    theme: 'default'
};

type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: ThemeActionType): InitStateType => {
    switch (action.type) {
        case ThemeActionsTypeEnum.CHANGE_THEME: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

export type ThemeActionType = ChangeThemeACType

type ChangeThemeACType = {
    type: ThemeActionsTypeEnum.CHANGE_THEME,
    payload: { theme: string }
}

export const changeThemeAC = (theme: string): ChangeThemeACType => {
    return {
        type: ThemeActionsTypeEnum.CHANGE_THEME,
        payload: {theme}
    }
};