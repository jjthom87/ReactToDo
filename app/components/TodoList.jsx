var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoApi = require('TodoApi');

export var TodoList = React.createClass({
	render: function () {
		var {todos, showCompleted, searchText} = this.props;

		var renderTodos = () => {
			var filterTodos = TodoApi.filterTodos(todos, showCompleted, searchText)
			if (filterTodos.length === 0){
				return (
					<p className="container__message">Nothing To Do</p>
				);
			}
			return filterTodos.map((todo) => {
				return (
					//key keeps track of your items
					//...todo is a spread operator that passes it down as a prop
					<Todo key={todo.id} {...todo}/>
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

export default connect(
	(state) => {
		return state;
	}
)(TodoList);

// <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
// connecting store to individual component