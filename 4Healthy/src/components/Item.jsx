import styles from "./Item.module.css";
const Item=({foodItems , handleBuyButtonClicked})=>{
//   const handleBuyButtonClicked=(foodItems)=>{
// console.log(`${foodItems} being bought`)
//   }
return(<>
<li className={`${styles['kg-item']} list-group-item`} ><span className={styles['kg-span']}>{foodItems}</span>
<button className={`${styles.buttons} btn btn-info`}
onClick={handleBuyButtonClicked}
>Buy</button>
</li>
</>)
}
export default Item; 