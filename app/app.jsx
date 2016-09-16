var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp')
//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

//calls all of the files here and renders to the html page
ReactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
);		