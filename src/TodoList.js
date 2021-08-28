import { Divider, List, Paper } from "@material-ui/core";
import React from "react";
import TodoItem from "./TodoItem";
import { v4 as uuid } from "uuid";

function TodoList({ todos, editTodo, deleteTodo, toggleComplete }) {
	if (todos.length)
		return (
			<Paper>
				<List>
					{todos.map((todo, idx) => (
						<React.Fragment key={uuid()}>
							<TodoItem
								key={todo.id}
								{...todo}
								editTodo={editTodo}
								deleteTodo={deleteTodo}
								toggleComplete={toggleComplete}
							/>
							{idx < todos.length - 1 && <Divider />}
						</React.Fragment>
					))}
				</List>
			</Paper>
		);
	return null;
}

export default TodoList;
