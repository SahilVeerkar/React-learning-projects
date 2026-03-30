import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import styles from './App.module.css'
import { useState } from 'react'
 
function App() {
 let [calVal,setCalVal]=useState("");
 const onButtonClick=(buttonText)=>{

 if(buttonText=='C'){
  setCalVal("");
 }
 else if(buttonText=='='){
const result=eval(calVal);
setCalVal(result);
 }
 else{
    let newVal=calVal+buttonText;
  setCalVal(newVal);

}
 }

  return<div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      
     </div>
    
}

export default App
