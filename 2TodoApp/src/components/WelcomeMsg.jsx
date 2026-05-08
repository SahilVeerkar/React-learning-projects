import styles from "./Welcome.module.css";
const Welcome=({todoItems})=>{
  
return<>
{todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>}
</>
}
export default Welcome;