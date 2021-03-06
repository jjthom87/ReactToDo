var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoApi = require('TodoApi');

// store.subscribe(() => {
// 	var state = store.getState();
// 	console.log('New state', state);
// 	TodoApi.setTodos(state.todos);
// });

// var initialTodos = TodoApi.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

//calls all of the files here and renders to the html page
ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('app')
);		
