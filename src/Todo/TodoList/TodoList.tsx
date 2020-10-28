import React from 'react'
import {TodoItem} from "../TodoItem/TodoItem";
import {todosType} from "../../Types/Types";
import s from "./TodoList.module.css"

type  propsType = {
    todos: Array<todosType>
    chosen: (id: number) => void
    delTodo: (id: number) => void
}


export const TodoList: React.FC<propsType> = (props) => {
    return (
        <ul className={s.list}>
            {props.todos.map((todo, index) => {
                return <TodoItem chosen={props.chosen} key={todo.id}
                                 todo={todo} delTodo={props.delTodo} index={index}/>
            })}
        </ul>
    )
}