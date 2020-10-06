import React, { Component } from "react";

import "./../styles/TodoForm.css";

export class TodoForm extends Component {
	state = {
		inputText: "",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit({
			task: this.state.inputText,
		});
		this.setState({ inputText: "" });
	};

	render() {
		const { inputText } = this.state;
		return (
			<div className="TodoForm flex">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="inputText"
						onChange={this.handleChange}
						value={inputText}
					/>
				</form>
				<button onClick={this.handleSubmit}>add task</button>
			</div>
		);
	}
}

export default TodoForm;
