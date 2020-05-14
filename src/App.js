import React from 'react';
import './App.css';

import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';

import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <div className="app">
      <div className="todo-list">
        <Todo/>
        <TodoForm/>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
