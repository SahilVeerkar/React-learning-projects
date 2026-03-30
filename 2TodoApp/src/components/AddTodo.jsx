import styles from "./AddTodo.module.css"
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
function AddTodo({onNewItem}){
  const [todoName,SetTodoName]=useState("");
  const [dueDate,setDueDate]=useState("");

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
<div className="container text-center"> 
  <div className="row kg-row">
    <div className="col-6">
    <input className={styles.in} type="text" value={todoName} placeholder="enter todo" onChange={handleNameChange}/>
    </div>
    <div className="col-4">
      <input className={styles.in} type="date" value={dueDate} onChange={handleDateChange}/>
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success kg-button" onClick={handleAddButton}><IoIosAdd></IoIosAdd></button>
    </div>
  </div>
  </div>
</>)
}
export default AddTodo;