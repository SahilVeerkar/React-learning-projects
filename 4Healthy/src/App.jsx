
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 let foodItems=["Dal","Green Vegetable","Roti","Salad","Milk","Ghee" ]

  return (
    <>
   <h1>Healthy Food</h1>
     <ul className="list-group">
      {foodItems.map((item)=>(
 <li className="list-group-item" key={item}>{item}</li>
      ))}
 
 
</ul>
</>
  )
}

export default App
