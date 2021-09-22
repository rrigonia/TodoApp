import { Divider, List, Paper } from '@material-ui/core';
import React from 'react';
import TodoItem from './TodoItem';
import { v4 as uuid } from 'uuid';
import { useTodos } from './contexts/todosContex';

function TodoList() {
	const { todos } = useTodos();
	if (todos.length)
		return (
			<Paper>
				<List>
					{todos.map((todo, idx) => (
						<React.Fragment key={uuid()}>
							<TodoItem key={todo.id} {...todo} />
							{idx < todos.length - 1 && <Divider />}
						</React.Fragment>
					))}
				</List>
			</Paper>
		);
	return null;
}

export default TodoList;
