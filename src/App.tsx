import './App.css';
import React, {useState} from "react";
import {TodoList} from "./Todo/TodoList/TodoList";
import {todosType} from "./Types/Types";
import {AddTodo} from './Todo/AddTodo/AddTodo';


const App: React.FC = () => {

    const [todos, setTodos] = useState([
        {id: 1, completed: false, title: 'Task one'},
        {id: 2, completed: false, title: 'Task two'},
        {id: 3, completed: false, title: 'Task three'},
    ] as Array<todosType>)

    const chosen = (id: number) => {
        if (id) {
            setTodos(
                todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            )
        }
    }
    const delTodo = (id: number) => {
        if (id) {
            setTodos(
                todos.filter(todo => todo.id !== id)
            )
        }
    }
    const addTodo = (text: string) => {
        setTodos(todos.concat([{
            id: Date.now(),
            completed: false,
            title: text
        }]))
    }

    return (
        <div className="wrapper">
            <h1>Todo</h1>
            <AddTodo addTodo={addTodo}/>
            {todos.length
                ? <TodoList chosen={chosen} delTodo={delTodo} todos={todos}/>
                : <h3>You are out of todo</h3>}
        </div>
    );
}

export default App;
