import styles from "./AddTodo.module.css"
import { useState } from "react";
function AddTodo({onNewItem}){
  const [todoName,SetTodoName]=useState();
  const [dueDate,setDueDate]=useState();

  const handleNameChange=(event)=>{
    SetTodoName(event.target.value);
  }
    const handleDateChange=(event)=>{
    setDueDate(event.target.value);
  }
  const handleAddButton=()=>{
onNewItem(todoName ,dueDate)
setDueDate("");
SetTodoName("");
  }
return(<>
<div class="container text-center"> 
  <div class="row kg-row">
    <div class="col-6">
    <input className={styles.in} type="text" value={todoName} placeholder="enter todo" onChange={handleNameChange}/>
    </div>
    <div class="col-4">
      <input className={styles.in} type="date" value={dueDate} onChange={handleDateChange}/>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-success kg-button" onClick={handleAddButton}>Add</button>
    </div>
  </div>
  </div>
</>)
}
export default AddTodo;