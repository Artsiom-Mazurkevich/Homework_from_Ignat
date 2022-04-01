import React, {ChangeEvent, MouseEventHandler} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error// need to fix with (?:)

    let buttonDisabled = true

    if (name.length > 0) {
        buttonDisabled = false
    }

    if (name.length === 0) {
        error = 'Error: Enter your name'
    } else error = ''


    return (
        <div>
            <input value={name} onChange={setNameCallback} className={s.inputClass}/>
            <button onClick={() => addUser(name)} disabled={buttonDisabled}>add</button>
            <span>{totalUsers}</span>
            <span className={s.error}>{error}</span>
        </div>
    )
}

export default Greeting
