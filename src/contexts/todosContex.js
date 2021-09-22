import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';
import { ACTION_TYPES } from '../hooks/useLocalStorageState';

const initialTodos = [ { id: 1, task: 'Pet a MOnkey', completed: false } ];
const TodosContext = createContext();
const DispatchContext = createContext();

function TodosProvider(props) {
	const [ todos, dispatch ] = useTodoState('todos', initialTodos);

	const editTodo = (id, newTask) =>
		dispatch({ type: ACTION_TYPES.edit, id, newTask });

	const toggleTodo = id => dispatch({ type: ACTION_TYPES.toggle, id });

	const deleteTodo = id => dispatch({ type: ACTION_TYPES.delete, id });

	const addTodo = newTodoText =>
		dispatch({ type: ACTION_TYPES.add, newTodoText });

	const dispatchValues = { editTodo, toggleTodo, deleteTodo, addTodo };

	return (
		<TodosContext.Provider value={{ todos }}>
			<DispatchContext.Provider value={dispatchValues} {...props} />
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
function useDispatch() {
	const context = React.useContext(DispatchContext);
	if (!context) {
		throw new Error('useTodos must be within a TodosContext provider.');
	}
	return context;
}

export { useTodos, useDispatch, TodosProvider };
