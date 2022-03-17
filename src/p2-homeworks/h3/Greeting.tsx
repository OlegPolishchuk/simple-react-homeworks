import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // fixed
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // fixed
    addUser: () => void // fixed
    error: string // fixed
    totalUsers: number // fixed
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error.length !== 0 ? s.error : ''// fixed

    return (
        <div className={s.wrapper}>
            <input value={name} onChange={(e) => setNameCallback(e)} className={inputClass}/>
            <button onClick={addUser} className={s.btn_add}>add</button>
            <span>{totalUsers}</span>
            <span className={s.error_wrapper}>{error}</span>
        </div>
    )
}

export default Greeting
