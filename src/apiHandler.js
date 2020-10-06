import axios from "axios";

const service = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
});

function errorHandler(error) {
	if (error.response.data) {
		console.log(error.response && error.response.data);
		throw error;
	}
	throw error;
}

export default {
	service,

	getTodos() {
		return service
			.get("/")
			.then((res) => res.data)
			.catch(errorHandler);
	},

	createTodo(newTodo) {
		return service
			.post("/add", newTodo)
			.then((res) => res.data)
			.catch(errorHandler);
	},

	deleteTodo(id) {
		return service
			.delete(`/delete/${id}`)
			.then((res) => res.data)
			.catch(errorHandler);
	},

};