import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState} from 'react';
 import "./App.css";
function App() {

 let foodItems=["Dal","Green Vegetable","Roti","Salad","Milk","Ghee" ];

 
 let [textToShow,SettextToshow]=useState("");
  const handleOnChange=(event)=>{
   SettextToshow(event.target.value);
  }
  return (<>
  <Container>
   <h1 className='food-heading'>Healthy Food</h1>
   
   <ErrorMessage items={foodItems}></ErrorMessage>
  
   <FoodInput  handleOnChange={ handleOnChange}></FoodInput>
    <p>{textToShow}</p>
   
   <FoodItems items={foodItems} ></FoodItems>
   
   </Container>
   {/* <Container>
      <p>aboove is the list of healthy food that are good for your health and well being</p>
   </Container> */}
     
</>); 
}

export default App;
