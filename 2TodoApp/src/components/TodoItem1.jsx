function TodoItem1(){
  let todoName='Buy milk';
  let todoDate=' 4/10/2023';
return(<>
<div class="container"> 

        
   
   {/* 2nd row start */}

   <div class="row kg-row">
    <div class="col-6">{todoName}</div>
    <div class="col-4">{todoDate}</div>
    <div class="col-2">
      <button type="button" class="btn btn-danger kg-button">Delete</button>
    </div>
  </div>
  {/* 2nd row end*/}
 </div>

</>)
}
export default TodoItem1;