

import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";

import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { useState, useReducer } from "react";
import Welcome from "./components/WelcomeMsg";
import "./App.css"; 
import { TodoItemsContext } from "./store/todo-items-store";
import TodoItemsContextProvider from "./store/todo-items-store";


function App() { 
 
  const defaultTodoItems = [{name:'buy ghee', dueDate:'today'}]

  return (
    <>
   <TodoItemsContextProvider>

      <center className="todo-container">
      <AppName/>
      <AddTodo /> 
    <Welcome > </Welcome>
      <TodoItems ></TodoItems>
     
     
     </center>
   </TodoItemsContextProvider>
   
    
    </>
  )
}

export default App;
