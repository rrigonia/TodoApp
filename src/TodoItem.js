import {
	Checkbox,
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useContext } from "react";
import { useTodos } from "./contexts/todosContex";
import EditTodoForm from "./EditTodoForm";
import useToggle from "./hooks/useToggle";

function TodoItem({ id, task, completed }) {
	const { deleteTodo, toggleTodo } = useTodos();
	const [ isEditing, toggle ] = useToggle();
	const handleDelete = e => {
		e.preventDefault();
		deleteTodo(id);
	};
	const handleComplete = e => {
		e.preventDefault();
		toggleTodo(id);
	};
	return (
		<ListItem style={{ height: "64px" }}>
			{!isEditing ? (
				<>
					<Checkbox
						onClick={handleComplete}
						tabIndex={-1}
						checked={completed}
					/>
					<ListItemText
						style={{
							textDecoration: completed ? "line-through" : "none",
							color: completed && "grey"
						}}
					>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label='Edit' onClick={toggle}>
							<EditIcon />
						</IconButton>
						<IconButton aria-label='Delete' onClick={handleDelete}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</>
			) : (
				<EditTodoForm toggleEditForm={toggle} id={id} task={task} />
			)}
		</ListItem>
	);
}

export default TodoItem;
