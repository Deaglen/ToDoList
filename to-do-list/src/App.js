import ToDoList from "./ToDoList";

import {useDispatch, useSelector} from "react-redux"


function App() {

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
 
  const addTask = (newTask) => {
    console.log("new task is" + newTask);
    if(newTask)
    {
      if(todos.indexOf(newTask))
        dispatch({type:"ADD_TASK", todos:newTask})
    }
   
  }
  const deleteTask = (newTask) => {
    dispatch({type:"DELETE_TASK", todos:newTask})
  }
  

 
  console.log(todos)

  
  return (
    <ToDoList todos={todos}  addTask={addTask} deleteTask={deleteTask} />
    );
}
export default App;
/*

import ToDoList from "./ToDoList";

import {useDispatch, useSelector} from "react-redux"
import ToDos from "./ToDos";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
 
  const addTask = (newTask) => {
    dispatch({type:"ADD_TASK", payload:{newTask}})
  }
  const deleteTask = (newTask) => {
    dispatch({type:"DELETE_TASK", payload:{newTask}})
  }
  
  var userInput = ''
  return (
    <><ToDoList todos={todos} addTask={addTask} deleteTask={deleteTask} /><form>
      <TextField id="outlined-basic" label="New Task"
        type="text"
        onChange={event => userInput = event.target.value} />
      <div onClick={() => addTask(userInput)} onsubmit="return false;">
        <Button variant="contained" color="primary">Сохранить</Button>
      </div>
    </form></>
  );
}
export default App;
*/


