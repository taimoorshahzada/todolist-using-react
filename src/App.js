import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Addtodo from "./Addtodo";
import Todos from "./Todos";
import Footer from "./Footer";
import React, { useState } from "react";
function App() {
  
  const onDelete = (todo) => {
    console.log("deleted!", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  function addTodo(title, desc) {
    let sno;
    if (todos.length == 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    console.log("I am adding this todo", title, desc, sno);
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);

    
  }
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header logo="Todolist" />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
