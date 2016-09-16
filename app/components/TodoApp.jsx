var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
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
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
				<TodoAdd onSearch={this.handleAddToDo}/>
			</div>
		)
	}
});

module.exports = TodoApp;