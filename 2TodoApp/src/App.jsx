

import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";

import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Welcome from "./components/WelcomeMsg";
import "./App.css"; 
import { TodoItemsContext } from "./store/todo-items-store";

function App() {

 



 
  const[todoItems,setTodoitem]=useState([]);

  const addNewItem=(itemName,itemDueDate)=>{
    let newTodoItem=[...todoItems,{name:itemName, dueDate:itemDueDate}]
    setTodoitem(newTodoItem);
  }

  const deleteItem =(todoItemName)=>{

const newTodoItems=todoItems.filter(item =>item.name!==todoItemName);
setTodoitem(newTodoItems);
  }
  const defaultTodoItems = [{name:'buy ghee', dueDate:'today'}]

  return (
    <>
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,


    }}>
     <center className="todo-container">
      <AppName/>
      <AddTodo /> 
    <Welcome > </Welcome>
      <TodoItems ></TodoItems>
     
     
     </center>
     </TodoItemsContext.Provider>
    </>
  )
}

export default App;
