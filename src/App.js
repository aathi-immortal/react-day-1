import "./App.css";
import {User} from "./User";
import { Planet } from "./Planet";
import { useState } from "react";

function App() {
const [todoList,setTodoList] = useState([]);
const [todo,setTodo] = useState("");



function handleInput(event)
{

  setTodo(event.target.value);
}
function addToDo()
{
    if(todo.length > 0)
    {

      let todoObj = {id:todoList.length == 0?1:todoList.length + 1,
      name:todo,
    status:false}
  
    
      const newTodo = [...todoList,todoObj];
      setTodoList(newTodo);
    }
    else
    {
      alert("can't add empty");
    }
    
}
function deleteTheTask(value)
{
  let newTodoList = [...todoList];
  
  newTodoList =  newTodoList.filter((task)=> task.id != value)
  
  setTodoList(newTodoList);
}
function complete(value)
{
  setTodo(todoList.filter((task)=>
  {
    if(task.id == value)
    {
      task.status = true;
    }
  }));
}
  return (
    
    <div className="App">
        <div className="addTask">
          <input type="text" onChange={handleInput}/>
          <button onClick={addToDo}>Add</button>
        </div>
        <div>
          {todo}
        </div>


        <div className="list">
          {
            todoList.map((value)=>{

              return <div style={{backgroundColor:value.status?"green":"red"}}>
                <h1 style={{display:"inline"}}>{value.name}</h1>
                <button onClick={()=>complete(value.id)}>complete</button>
                <button onClick={()=>deleteTheTask(value.id)}>X</button>
              </div>
            }
              
           
            )
              

            

          }
        </div>
    </div>

  );

}



export default App;
