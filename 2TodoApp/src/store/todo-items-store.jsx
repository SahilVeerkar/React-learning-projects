import { createContext } from "react";
import { useReducer } from "react";
import TodoItem from "../components/TodoItem";
export const TodoItemsContext= createContext({

  TodoItems:[],
  addNewItem: ()=>{},
  deleteItem: ()=>{},
}); 



const todoItemReducer=(currTodoItem,action)=>{
  let newTodoItem = currTodoItem;
  if(action.type==='NEW_ITEM'){
newTodoItem=[...currTodoItem,{name:action.payload.itemName, dueDate:action.payload.itemDueDate}]
  }
  else if(action.type==='DELETE_ITEM'){
newTodoItem=currTodoItem.filter(item =>item.name!==action.payload.itemName);

  }
  return newTodoItem;
}


const TodoItemsContextProvider =({children})=>{
const[todoItems,dispatchTodoItems]= useReducer(todoItemReducer,[]); 

//  const[todoItems,setTodoitem]=useState([]);

  const addNewItem=(itemName,itemDueDate)=>{
    // let newTodoItem=[...todoItems,{name:itemName, dueDate:itemDueDate}]
    // setTodoitem(newTodoItem);
    const newItemAction={
       type:'NEW_ITEM',
       payload:{
        itemName,
        itemDueDate
       }
    }
    dispatchTodoItems(newItemAction)
  }

  const deleteItem =(todoItemName)=>{

     const deleteItemAction={
       type:'DELETE_ITEM',
       payload:{
        itemName:todoItemName
        
       }
    }
    dispatchTodoItems(deleteItemAction)


  }
  return <>
   <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,


    }}>{children}</TodoItemsContext.Provider>
  </>
}
export default TodoItemsContextProvider;