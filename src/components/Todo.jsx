import React from "react";
import "./../styles/Todo.css";

const Todo = ({ todo, onDelete }) => {
	return (
		<div className="Todo flex">
			<p className="content">{todo.task}</p>
			<p className="delete-btn" onClick={onDelete}>
				X
			</p>
		</div>
	);
};

export default Todo;
