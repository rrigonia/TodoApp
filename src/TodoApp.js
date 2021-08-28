import { AppBar, Grid, Paper, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import useTodoState from "./hooks/useTodoState";
import { v4 as uuid } from "uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
	const initialTodos = [ { id: uuid(), task: "Pet a MOnkey", completed: false } ];
	const { todos, addTodo, editTodo, deleteTodo, toggleTodo } = useTodoState(
		"todos",
		initialTodos
	);
	return (
		<Paper
			style={{
				height: "100vh",
				padding: "0",
				margin: "0",
				backgroundColor: "#fafafa"
			}}
			elevation={0}
		>
			<AppBar color='primary' position='static' style={{ height: "64px" }}>
				<Toolbar>
					<Typography color='inherit'>TODOS APP WITH HOOKS</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justifyContent='center' style={{ marginTop: "1rem" }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList
						key={uuid()}
						todos={todos}
						editTodo={editTodo}
						deleteTodo={deleteTodo}
						toggleComplete={toggleTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}
