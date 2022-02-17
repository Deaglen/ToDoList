import ToDo from "./ToDo";

export default function ToDos({todos, removeTask})
{
    return(
       <div> 
           {todos.map((todo) => {
            return (
                <ToDo todo={todo} removeTask={removeTask}/>
            );
            })}

        </div>

    );
    
    
}  