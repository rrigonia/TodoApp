import { useEffect, useReducer } from 'react';
import { v4 as uuid } from 'uuid';

export const ACTION_TYPES = {
	add: 'add',
	edit: 'edit',
	delete: 'delete',
	toggle: 'toggle'
};

export const todosReducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.add:
			console.log(state);
			return [
				...state,
				{ id: uuid(), task: action.newTodoText, completed: false }
			];
		case ACTION_TYPES.edit:
			const allTodos = state.map(
				t => (t.id === action.id ? { ...t, task: action.newTask } : t)
			);
			return allTodos;
		case ACTION_TYPES.delete:
			return [ ...state.filter(t => t.id !== action.id) ];
		case ACTION_TYPES.toggle:
			const toggledTodos = state.map(
				todo =>
					todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			);
			return toggledTodos;

		default:
			throw new Error(`Unhandled action type (${action.type})`);
	}
};

function useLocalStorageState(key, defaultVal, reducer = todosReducer) {
	function init(initialVal) {
		let val;
		try {
			val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
		} catch (e) {
			val = defaultVal;
		}
		return val;
	}
	// Set a piece of state, based off of value in localStorage;
	const [ state, dispatch ] = useReducer(reducer, defaultVal, init);

	// use useEffect to set my localStorage with my piece of state;
	useEffect(
		() => {
			window.localStorage.setItem(key, JSON.stringify(state));
		},
		[ state, key ]
	);
	return [ state, dispatch ];
}

export default useLocalStorageState;
