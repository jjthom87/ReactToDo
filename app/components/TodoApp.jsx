var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
	// getInitialState: function () {
	// 	return {
	// 		showCompleted: false,
	// 		searchText: '',
	// 		todos: TodoApi.getTodos()
	// 	}
	// },
	// componentDidUpdate: function () {
	// 	TodoApi.setTodos(this.state.todos)
	// },
	// handleAddTodo: function(text){
	// 	this.setState({
	// 		todos: [
	// 			...this.state.todos,
	// 			{
	// 				id: uuid(),
	// 				text: text,
	// 				completed: false,
	// 				createdAt: moment().unix(),
	// 				completedAt: undefined
	// 			}
	// 		]
	// 	})
	// },
	// handleToggle: function(id){
	// 	var updatedTodos = this.state.todos.map(function(todo){
	// 		if(todo.id === id){
	// 			todo.completed = !todo.completed;
	// 			todo.completedAt = todo.completed ? moment().unix() : undefined;
	// 		}
	// 		return todo;
	// 	})

	// 	this.setState({
	// 		todos: updatedTodos
	// 	})
	// },
	// handleSearch: function(showCompleted, searchText){
	// 	this.setState({
	// 		showCompleted: showCompleted,
	// 		searchText: searchText.toLowerCase()
	// 	});
	// },
	render: function () {
		// var {todos, showCompleted, searchText} = this.state;
		// var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

		return (
			<div className>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<TodoSearch/>
							<TodoList/>
							<TodoAdd/>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = TodoApp;

// <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>