import {  Paper, TextField } from "@material-ui/core";
import React from "react";
import useFormState from "./hooks/useFormState";

function TodoForm({ addTodo }) {
	const [ todoInput, updateTodoInput, resetTodoInput ] = useFormState("");
	const handleAdd = evt => {
		evt.preventDefault();
		addTodo(todoInput);
		resetTodoInput();
	};
	return (
		<Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
			<form onSubmit={handleAdd}>
				<TextField
					margin='normal'
					label='Add New Todo'
					onChange={updateTodoInput}
					type='text'
					value={todoInput}
					fullWidth
				/>
			</form>
		</Paper>
	);
}

export default TodoForm;
