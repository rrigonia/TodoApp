import { IconButton, TextField } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import useFormState from "./hooks/useFormState";

function EditTodoForm({ id, task, toggleEditForm, editTodo }) {
	const [ value, handleChange, reset ] = useFormState(task);
	const handleSubmit = e => {
		e.preventDefault();
		editTodo(id, value);
		reset();
		toggleEditForm();
	};
	return (
		<form onSubmit={handleSubmit} style={{ width: "100%", display: "flex" }}>
			<TextField
				autoFocus
				value={value}
				onChange={handleChange}
				margin='normal'
				style={{ marginLeft: "1rem" }}
			/>
			<div style={{ marginLeft: "auto" }}>
				<IconButton type='submit'>
					<DoneIcon />
				</IconButton>
				<IconButton onClick={toggleEditForm}>
					<CloseIcon />
				</IconButton>
			</div>
		</form>
	);
}

export default EditTodoForm;
