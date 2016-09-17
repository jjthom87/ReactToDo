var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	render: function () {
		var {todos} = this.props;
		//or this.props.todos
		var renderTodos = () => {
			return todos.map((todo) => {
				return (
					//key keeps track of your items
					//...todo is a spread operator that passes it down as a prop
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
				);
			});
		};

		return(
			<div>
				{renderTodos()}
			</div>
		)
	}
})

module.exports = TodoList;