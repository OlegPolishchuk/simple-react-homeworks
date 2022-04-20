import React from 'react'
import {checkUserAgeAC, homeWorkReducer, sortUsersAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[]


beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortUsersAC('UP'))

    const sortedState = [...newState].sort((a,b) => {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    })

    console.log(newState)

    expect(newState[0].name).toBe('Александр')
    expect(newState[0].name).toBe(sortedState[0].name)
    expect(newState === initialState).toBe(false)
})


test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortUsersAC('DOWN'))

    const sortedState = [...newState].sort((a,b) => {
        return a.name < b.name ? 1 : -1
    })

    expect(newState[0].name).toBe(sortedState[0].name)
    expect(newState[5].name).toBe('Александр')
    expect(newState === initialState).toBe(false)
})


test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkUserAgeAC(18))

    const sortedState = [...newState].filter(el => el.age >= 18)

    const findMin = (arr: UserType[]) => {

        let ageProperties =  arr.map(el => el.age)

        return Math.min.apply(null, ageProperties)
    }

    expect(newState.length).toBe(4)
    expect(findMin(sortedState)).toBe(40)
})
