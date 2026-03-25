function TodoItem2(){
  let todoName='Go to school';
  let todoDate=' 4/10/2023';
return(<>
<div class="container"> 

        
   
   {/* 3rth row start */}

   <div class="row kg-row">
    <div class="col-6">{todoName}</div>
    <div class="col-4">{todoDate}</div>
    <div class="col-2">
      <button type="button" class="btn btn-danger kg-button">Delete</button>
    </div>
  </div>
  {/* 3th row end*/}
 </div>

</>)
}
export default TodoItem2;