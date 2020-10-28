import React, {FormEvent, useState} from "react";
import s from "./AddTodo.module.css"

type propsType = {
    addTodo: (value: string) => void
}

export const AddTodo: React.FC<propsType> = (props) => {

    const [value, setValue] = useState('');

    const defoltOff = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setValue('')
    }

    return (
        <form className={s.form} action="" onSubmit={defoltOff}>
            <input  value={value} onChange={e => setValue(e.target.value)}
                   type="text"/>
            <button onClick={props.addTodo.bind(null, value)}
                    type="submit">Add todo
            </button>
        </form>
    );
}