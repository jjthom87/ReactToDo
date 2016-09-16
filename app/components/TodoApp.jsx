var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: 1,
					text: 'get up early'
				},{
					id: 2,
					text: 'code'
				},{
					id: 3, 
					text: 'go to work'
				},{
					id: 4,
					text: 'call pat bateman'
				}
			]
		}
	},
	handleAddToDo: function(text){
		alert('new todo: ' + text);
	},
	handleSearch: function(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<TodoAdd onAdd={this.handleAddToDo}/>
			</div>
		)
	}
});

module.exports = TodoApp;