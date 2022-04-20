import React, {useState} from 'react'
import {checkUserAgeAC, homeWorkReducer, sortUsersAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)


    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.user_item}>
            <div className={s.name_wrapper}>
                <span>user: </span>{p.name}
            </div>
            <div className={s.age_wrapper}>
                <span>age: </span>{p.age}
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUsersAC('UP')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortUsersAC('DOWN')))
    const checkUsersAge = () => setPeople(homeWorkReducer(initialPeople, checkUserAgeAC(18)))

    return (
        <div className={'container'}>
            homeworks 8

            <div className={s.users_wrapper}>
                {finalPeople}
                <div className={s.controls}>
                    <SuperButton onClick={sortUp}>sort up</SuperButton>
                    <SuperButton onClick={sortDown} variant={'white'}>sort down</SuperButton>
                    <SuperButton onClick={checkUsersAge} variant={'purple'}>check 18</SuperButton>
                </div>
            </div>

        </div>
    )
}

export default HW8
