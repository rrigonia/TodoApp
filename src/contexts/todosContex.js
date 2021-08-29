import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const initialTodos = [ { id: 1, task: "Pet a MOnkey", completed: false } ];
export const TodosContext = createContext();

export function TodosProvider(props) {
	const todoStuff = useTodoState("todos", initialTodos);
	return (
		<TodosContext.Provider value={todoStuff}>
			{props.children}
		</TodosContext.Provider>
	);
}
