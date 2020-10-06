import React, { Component } from "react";
import apiHandler from "./../apiHandler";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

import "./../styles/TodoList.css";

export class TodoList extends Component {
	state = {
		allTodos: [],
	};

	componentDidMount = () => {
		apiHandler
			.getTodos()
			.then((res) => {
				this.setState({
					allTodos: res,
				});
			})
			.catch((err) => console.log(err));
	};

	addTask = (newTask) => {
		apiHandler
			.createTodo(newTask)
			.then((res) => {
				console.log("Task added: ", res);
				this.setState({ allTodos: [res, ...this.state.allTodos] });
			})
			.catch((err) => console.log(err));
	};

	deleteTask = (id) => {
		apiHandler
			.deleteTodo(id)
			.then(() => {
				this.setState({
					allTodos: this.state.allTodos.filter((x) => x._id !== id),
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		const { allTodos } = this.state;

		return (
			<div className="TodoList">
				{/* ADD A TASK */}
				<TodoForm onSubmit={this.addTask} />

				<hr />

				{/* DISPLAY TASKS + DELETE */}
				<div className="tasks-list flex">
					{allTodos.map((todo) => (
						<Todo
							key={todo._id}
							todo={todo}
							onDelete={() => this.deleteTask(todo._id)}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default TodoList;
