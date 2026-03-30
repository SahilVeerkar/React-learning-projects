

import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";

import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Welcome from "./components/WelcomeMsg";
import "./App.css"; 

function App() {

 



 
  const[todoItems,setTodoitem]=useState([]);

  const handleNewItem=(itemName,itemDueDate)=>{
    let newTodoItem=[...todoItems,{name:itemName, dueDate:itemDueDate}]
    setTodoitem(newTodoItem);
  }

  const handleDeleteItem =(todoItemName)=>{
console.log(`${todoItemName}item delete`)
const newTodoItems=todoItems.filter(item =>item.name!==todoItemName);
setTodoitem(newTodoItems);
  }


  return (
    <>
     <center className="todo-container">
      <AppName/>
      <AddTodo onNewItem={handleNewItem} /> 
     {todoItems.length===0 && <Welcome > </Welcome>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
     
     
     </center>
    </>
  )
}

export default App;
