import { AppBar, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import { TodosProvider } from './contexts/todosContex';
import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TodoApp() {
	return (
		<Paper
			style={{
				height: '100vh',
				padding: '0',
				margin: '0',
				backgroundColor: '#fafafa'
			}}
			elevation={0}
		>
			<AppBar color='primary' position='static' style={{ height: '64px' }}>
				<Toolbar>
					<Typography color='inherit'>TODOS APP WITH HOOKS</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodosProvider>
						<TodoForm />
						<TodoList />
					</TodosProvider>
				</Grid>
			</Grid>
		</Paper>
	);
}
