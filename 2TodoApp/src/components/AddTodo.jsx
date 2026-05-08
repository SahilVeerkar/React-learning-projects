import styles from "./AddTodo.module.css"
import {useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo(){
  // const [todoName,SetTodoName]=useState("");
  // const [dueDate,setDueDate]=useState("");
  const todoNameElement=useRef(0);
  const dueDateElement=useRef(0);
  const {addNewItem} = useContext(TodoItemsContext);
  


  // const handleNameChange=(event)=>{
  //   SetTodoName(event.target.value);
  //   noOfUpdate.current+=1;
  // }
  //   const handleDateChange=(event)=>{
  //   setDueDate(event.target.value);
  //   console.log(noOfUpdate.current)
  // }
  const handleAddButton=()=>{
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    dueDateElement.current.value="";
    todoNameElement.current.value="";
addNewItem(todoName ,dueDate)
// setDueDate("");
// SetTodoName("");
  }
return(<>
<div className="container text-center"> 
  <div className="row kg-row">
    <div className="col-6">
    <input className={styles.in} ref={todoNameElement} type="text" 
    //value={todoName} 
    placeholder="enter todo" 
    //onChange={handleNameChange}
    />
    </div>
    <div className="col-4">
      <input className={styles.in} ref={dueDateElement} type="date" 
      //value={dueDate} 
      //onChange={handleDateChange}
      />
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success kg-button" 
      onClick={handleAddButton}><IoIosAdd></IoIosAdd></button>
    </div>
  </div>
  </div>
</>)
}
export default AddTodo;