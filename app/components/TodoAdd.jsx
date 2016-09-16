var React = require('react');

var TodoAdd = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();

		var todo = this.refs.todo.value;

		if (todo.length > 0){
			this.refs.todo.value = '';
			//onSearch is created here
			this.props.onAdd(todo);
		} else {
			//focus puts the cursor back to the input field if invalid
			this.refs.todo.focus();
		}
	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div>
						<input type="text" ref="todo" placeholder="Enter ToDo"/>
					</div>
					<div>
						<button className="button expanded hollow">Add ToDo</button>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = TodoAdd;