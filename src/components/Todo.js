import React, {useContext} from 'react'
import { GlobalContext} from '../context/GlobalState';


export const Todo = () => {

    const context = useContext(GlobalContext);
    const {completeTodo} = useContext(GlobalContext);
    const {deleteTodo} = useContext(GlobalContext);



    console.log("Context", context);

    return (  
      <>

      {context.todos.map((todo) => (
        <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">{todo.text}
     <div>
       <button onClick={() => completeTodo(todo.id)}>Complete</button>
       <button onClick={() => deleteTodo(todo.id)}>x</button>
     </div>
     </div>
      ))}      
    

     </>
    )
  }