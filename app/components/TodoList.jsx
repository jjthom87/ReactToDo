var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	render: function () {
		var {todos} = this.props;
		//or this.props.todos
		var renderTodos = () => {
			if (todos.length === 0){
				return (
					<p className="container__message">Nothing To Do</p>
				);
			}
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