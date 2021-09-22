import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const initialTodos = [ { id: 1, task: 'Pet a MOnkey', completed: false } ];
const TodosContext = createContext();
const DispatchContext = createContext();

function TodosProvider(props) {
	const todoStuff = useTodoState('todos', initialTodos);
	return (
		<TodosContext.Provider value={todoStuff}>
			{props.children}
		</TodosContext.Provider>
	);
}

function useTodos() {
	const context = React.useContext(TodosContext);
	if (!context) {
		throw new Error('useTodos must be within a TodosContext provider.');
	}
	return context;
}

export { useTodos, TodosProvider };
