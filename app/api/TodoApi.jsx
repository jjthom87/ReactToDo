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
	}
};