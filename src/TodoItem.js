import React from 'react'
import './TodoItem.css';
export default function TodoItem({todo, onDelete}) {
    return (
        <div>
            <h4>Serial No: {todo.sno}</h4>
            <p>{todo.title}</p>
            <p>{todo.desc}</p>
            <button onClick={()=>onDelete(todo)}>Delete</button>
        </div>
    )
}
