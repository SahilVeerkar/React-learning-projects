import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState} from 'react';
 import "./App.css";
function App() {

 let [foodItems,SetFooditems]=useState([ ]);
  const handleOnKeyDown=(event)=>{
   if(event.key=="Enter"){
      let newFoodItem=event.target.value;
      event.target.value="";
      console.log(newFoodItem);
      let newItems=[...foodItems,newFoodItem];
      SetFooditems(newItems);
   }
  }
  return (<>
  <Container>
   <h1 className='food-heading'>Healthy Food</h1>
   
   
  
   <FoodInput  handleOnKeyDown={ handleOnKeyDown}></FoodInput>
    
    <ErrorMessage items={foodItems}></ErrorMessage>
   
   <FoodItems items={foodItems} ></FoodItems>
   
   
   </Container>
   {/* <Container>
      <p>aboove is the list of healthy food that are good for your health and well being</p>
   </Container> */}
     
</>); 
}

export default App;
