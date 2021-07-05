import React from 'react'
import './Todos.css';
import TodoItem from './TodoItem';
export default function Todos({todos, onDelete}) {
    return (
        <div>
        <div className="cc">
            <h3>Todolist</h3>
            {todos.length === 0 ? "No todos to display" :
            todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
            })}
        </div>
        </div>
    )
}
