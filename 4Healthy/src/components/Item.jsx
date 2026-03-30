import styles from "./Item.module.css";
const Item=({foodItems ,bougth, handleBuyButtonClicked})=>{
//   const handleBuyButtonClicked=(foodItems)=>{
// console.log(`${foodItems} being bought`)
//   }
return(<>
<li className={`${styles['kg-item']} list-group-item  ${bougth && "active"}`} >
  <span className={styles['kg-span']}>{foodItems}</span>
<button className={`${styles.buttons} btn btn-info`}
onClick={handleBuyButtonClicked}
>Buy</button>
</li>
</>)
}
export default Item; 