import React from 'react'
import './Addtodo.css';
import { useState } from 'react';
export default function Addtodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("title and desc not be blanked");
        }
        else{
        props.addTodo(title,desc);
    }
    }
    return (
        <div>
        <form onSubmit={submit}>
            <h1>title</h1>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} name="title" id="title" />
            <h1>desc</h1>
            <textarea name="desc" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} cols="30" rows="10"></textarea>
            <br />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
