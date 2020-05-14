import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    todos: [
        {
          id: 1,
          text: 'Learn about React',
          isCompleted: false
        },    
        {
          id: 2,
          text: 'Clean room',
          isCompleted: false
        },    
        {
          id: 3,
          text: 'Go todo app',
          isCompleted: false
        },
      ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTodo(text) {
      dispatch({
          type: 'ADD_TODO',
          payload: text
      })
  }   

  function completeTodo(id) {
    dispatch({
        type: 'COMPLETE_TODO',  
        payload: id
    })
}  

function deleteTodo(id) {
  dispatch({
      type: 'DELETE_TODO',  
      payload: id
  })
}  
  
  return (
    <GlobalContext.Provider value={{
        todos:state.todos,
        completeTodo,
        addTodo,
        deleteTodo
        }}>
        {children}
    </GlobalContext.Provider>
    );
}