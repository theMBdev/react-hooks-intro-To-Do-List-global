export default (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

            case 'COMPLETE_TODO':
                return {
                    ...state,
                    todos: state.todos.map( todo => todo.id === action.payload ?    
                        // transform the one with a matching id                    
                        {...todo, isCompleted: true} :
                        // otherwise return original todo
                        todo
                    )
                }
                
            case 'DELETE_TODO':
                return {
                    ...state,                    
                    // filter the todos and return the ones were the id is not the one given
                    todos: state.todos.filter(todo => todo.id !== action.payload )                    
                }               

    default:
        return state;
    }
}    