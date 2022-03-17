import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // fixed
    addUserCallback: (name: string) => void // fixed
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // fixed
    const [error, setError] = useState<string>('') // fixed

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // fixed
        const name = e.currentTarget.value
        setName(name)
    }
    const totalUsers = users.length // fixed
    const addUser = () => {

        const regExp = /\s/gi
        // сделать валидацию
        if (name !== '') {
            if (regExp.test(name)) {
                setError('Error! Name cant consist of spase')
                setName('')
            } else {
                addUserCallback(name);
                setName('')
                setError('')
            }
        } else {
            setError('Error ! Name should consist at least 1 letter')
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
