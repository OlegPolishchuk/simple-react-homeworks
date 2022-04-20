import {UserType} from "../HW8";

type SortingType = 'UP' | 'DOWN'

type ActionType = ReturnType<typeof sortUsersAC> | ReturnType<typeof checkUserAgeAC>

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT': {

            const sortingType = action.payload

            return [...state].sort((a,b) => {
               if (sortingType === 'UP') {
                   return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
               }
               return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
            })
        }

        case 'CHECK': {
            return state.filter(el => el.age >= action.payload)
        }

        default: return state
    }
}

export const sortUsersAC = (sortingType: SortingType) => {
    return {
        type: 'SORT',
        payload: sortingType
    } as const
}

export const checkUserAgeAC = (age: number) => {
    return {
        type: 'CHECK',
        payload: age
    } as const
}