import './App';
import './index.css';
import ToDos from './ToDos';
import InputForm from './InputForm'

export default function ToDoList({todos, addTask, deleteTask})
{                   
    
       return(
        <div  className="toDoBody">
            <div  className="title">
                <p> ToDoList </p>
            </div>
            <div  className="input">
                <p> Add </p>
                <InputForm addTask={addTask}/>
                
            </div>
            
            <div className='allDos'>
            <ToDos todos={todos} removeTask={deleteTask}/>
            </div>

        </div>
    );
    /*
    return(
        <div  className="toDoBody">
            <div  className="title">
                <p> ToDoList </p>
            </div>
            <div  className="input">
               
                <p> input </p>
            </div>
           

            <ToDos todos={todos}/>
            

        </div>
    );
    */
    
}  
/*

.ToDo {
  
  border: 10px solid rgb(24, 211, 218);
word-wrap: break-word;
 
}
.left_block {

  width:225px;
  border: 5px solid rgb(54, 207, 40);
  
  }
.right_block {
 
  width:225px;
  border: 5px solid rgb(215, 22, 233);
  }

  .m{
    border: 5px solid rgb(250, 246, 1);
    }
*/

/*import './App';
import './index.css';
import ToDos from './ToDos';
import { useState } from 'react'
//import './App.js'
import InputForm from './InputForm'

export default function ToDoList()
{                   
    const [todos, setTodos] = useState([])
 

    
    const addTask = (userInput) => {
        if(userInput) {

        setTodos([...todos, userInput])
        
        }
    }

    const removeTask = (todoDel) => {
        setTodos([...todos.filter((todo) => todo !== todoDel)])
    }


    return(
        <div  className="toDoBody">
            <div  className="title">
                <p> ToDoList </p>
            </div>
            <div  className="input">
                <InputForm addTask={addTask}/>
                <p> input </p>
            </div>
           

            <ToDos todos={todos} removeTask={removeTask}/>
            

        </div>
    );
    
    
}  
*/