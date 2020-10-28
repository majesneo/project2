import React from 'react'
import {todosType} from "../../Types/Types";
import s from "./TodoItem.module.css"

type propsType = {
    index: number
    todo: todosType
    chosen: (id: number) => void
    delTodo: (id: number) => void
}

export const TodoItem: React.FC<propsType> = ({todo, delTodo, chosen, index}) => {
    return (
        <li className={s.element}>
            <span className={todo.completed ? s.done : ""}>
                <input onChange={() => chosen(todo.id)}
                       className={s.input}
                       checked={todo.completed}
                       type="checkbox"/>
            <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button onClick={delTodo.bind(null,todo.id)}>&times;</button>
        </li>
    )
}