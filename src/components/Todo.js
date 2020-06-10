import React, {useContext} from 'react'
import { GlobalContext} from '../context/GlobalState';


export const Todo = () => {

    const context = useContext(GlobalContext);
    const {completeTodo} = useContext(GlobalContext);
    const {deleteTodo} = useContext(GlobalContext);

    // console.log("Context", context);

    return (  
      <>
      {context.todos.map((todo) => (
        <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">{todo.text}
     <div className="button-container">
       <button className="button-complete" onClick={() => completeTodo(todo.id)}><img src="./checked.png" alt="/"></img></button>
       <button className="button-delete" onClick={() => deleteTodo(todo.id)}><img src="./x.png" alt="x"></img></button>
     </div>
     </div>
      ))}      
     </>
    )
  }