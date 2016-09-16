var React = require('react');
var TodoList = require('TodoList');

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
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		)
	}
});

module.exports = TodoApp;