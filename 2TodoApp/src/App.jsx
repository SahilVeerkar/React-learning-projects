

import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";

import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css"; 

function App() {
 const todoItems=[{name:"buy milk", dueDate:"4/10/2023"},
  {name:"buy milk", dueDate:"4/10/2023"},{name:"like this vidio", dueDate:"4/10/2023"}
 ]

  return (
    <>
     <center className="todo-container">
      <AppName/>
      <AddTodo/>  
      <TodoItems todoItems={todoItems}></TodoItems>
     
     
     </center>
    </>
  )
}

export default App;
