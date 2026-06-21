import { useEffect, useState } from "react";

let CurrentTime=()=>{
  const[time,setTime]=useState(new Date());
  useEffect(()=>{
    const interValId = setInterval(()=>{
      setTime(new Date());
    },1000);
    return()=>{
 clearInterval(interValId);
    }
   
  },[])
return(<>
<p className="lead">this is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
</>)
}
export default CurrentTime;