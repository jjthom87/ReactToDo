var $ = require('jQuery');

module.exports = {
	setTodos: function(todos){
		if($.isArray(todos)){
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function(){
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch (err) {

		}

		//if true, code right after question mark gets executed
		//if false, after colon
		return $.isArray(todos) ? todos : []


		// if ($.isArray(todos)){
		// 	return todos;
		// } else {
		// 	return [];
		// }

		//this is exactly the same as the ternary
	},
	filterTodos: function(todos, showCompleted, searchText){
		var filteredTodos = todos;

		//filter by showCompleted;
		filteredTodos = filteredTodos.filter((todo)=>{
			return !todo.completed || showCompleted;
		});

		//filter by searchText;
		filteredTodos = filteredTodos.filter((todo)=>{
			var text = todo.text.toLowerCase();
			return searchText.length === 0 || text.indexOf(searchText) > -1;
		});

		//Sort todos with non-completed first
		filteredTodos.sort((a, b)=>{
			if (!a.completed && b.completed){
				return -1;
				//sort a first
			} else if (a.completed && !b.completed){
				return 1;
				//sort b first
			} else {
				return 0;
				//a=b
			}

		})

		return filteredTodos;
	}
};