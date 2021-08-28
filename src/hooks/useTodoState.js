import { v4 as uuid } from "uuid";
import useLocalStorageState from "./useLocalStorageState";

const useTodoState = (key, initialTodos) => {
	const [ todos, setTodos ] = useLocalStorageState(key, initialTodos);

	return {
		todos,
		addTodo: newTodoText => {
			setTodos([
				...todos,
				{ id: uuid(), task: newTodoText, completed: false }
			]);
		},
		editTodo: (id, newTask) => {
			const allTodos = todos.map(
				t => (t.id === id ? { ...t, task: newTask } : t)
			);
			setTodos(allTodos);
		},
		deleteTodo: id => {
			setTodos([ ...todos.filter(t => t.id !== id) ]);
		},
		toggleTodo: id => {
			setTodos(
				todos.map(
					todo =>
						todo.id === id ? { ...todo, completed: !todo.completed } : todo
				)
			);
		}
	};
};

export default useTodoState;
