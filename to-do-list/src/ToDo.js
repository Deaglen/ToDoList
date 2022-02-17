import './index.css';

export default function ToDo({todo, removeTask})
{
    return(
   
        <div className="ToDo">
            <div className='right_block' onClick={() => removeTask(todo)}>
              X
            </div>
            <div className="left_block">{todo}</div>

        </div>

      

    );
    
    
}  
/*
.wrapper {
  width:450px;
  word-wrap: break-word;
  height:auto;
  }
*/