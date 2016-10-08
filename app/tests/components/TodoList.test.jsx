var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
	it('should exist', () =>{
		expect(TodoList).toExist();
	});
	it('should render one Todo component for each todo item', () => {
		var todoTest = 
		[{
			id: 1,
			text: 'Do one'
		},{
			id: 2,
			text: 'Do two'
		}]
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todoTest}/>);
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponents.length).toBe(todoTest.length);
	});
	it('should render empty message if no todos', () => {
		var todos = [];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);
	});
});