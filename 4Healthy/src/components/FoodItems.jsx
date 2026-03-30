import Item from "./Item";
import { useState } from "react";

const FoodItems=({items})=>{
 
  let [activeItem,setActiveItem]=useState([]); 
  
  let onBuyButton=(item, event)=>{
let newItems=[...activeItem,item]
setActiveItem(newItems);
  }

return(<>
<ul className="list-group">
      {items.map((item)=>(
        <Item
        bougth={activeItem.includes(item )}
        key={item} 
        foodItems={item} 
        handleBuyButtonClicked={(event)=>onBuyButton(item,event)}
        
        ></Item>
      ))}

 </ul>
</>);
}
export default FoodItems;