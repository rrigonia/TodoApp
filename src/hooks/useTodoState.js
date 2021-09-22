import useLocalStorageState from './useLocalStorageState';

const useTodoState = (key, initialTodos) => {
	const [ todos, dispatch ] = useLocalStorageState(key, initialTodos);

	return [ todos, dispatch ];
};

export default useTodoState;
