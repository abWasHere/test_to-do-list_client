import React from 'react';
import TodoList from "./components/TodoList.jsx";

import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header flex">
				<h1>to do app</h1>
			</header>
			<TodoList />
		</div>
	);
}

export default App;
