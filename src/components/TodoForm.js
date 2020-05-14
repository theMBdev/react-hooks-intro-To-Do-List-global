import React, {useState, useContext} from 'react';
import { GlobalContext} from '../context/GlobalState';


export const TodoForm = () => {
    //{addTodo}
    const [value, setValue] = useState('');
    const { addTodo } = useContext(GlobalContext);

    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;

      const newTodo = {
        id: Math.floor(Math.random() * 100000000),
        text: value,
        isCompleted: false
      }

      addTodo(newTodo);  
      setValue('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add todo..."></input>    
      </form>
    )
  }