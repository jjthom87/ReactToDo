var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () =>{
		expect(TodoApp).toExist();
	});
	it('should add todo to the todos state on handleTodoAdd', ()=>{
		var todotext = 'test text';
		var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoapp.setState({todos: []});
		todoapp.handleAddTodo(todotext);

		expect(todoapp.state.todos[0].text).toBe(todotext);
		expect(todoapp.state.todos[0].createdAt).toBeA('number');

	});
	it('should toggle completed value when handleToggle called', ()=>{
		var tododata = {
			id: 11,
			text: 'test',
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};
		var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoapp.setState({todos: [tododata]});

		expect(todoapp.state.todos[0].completed).toBe(false);
		todoapp.handleToggle(11);
		expect(todoapp.state.todos[0].completed).toBe(true);
		expect(todoapp.state.todos[0].completedAt).toBeA('number');
	});
	it('should toggle todo from completed to incompleted', ()=>{
		var tododata = {
			id: 11,
			text: 'test',
			completed: true,
			createdAt: 0,
			completedAt: 123
		};
		var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoapp.setState({todos: [tododata]});

		expect(todoapp.state.todos[0].completed).toBe(true);
		todoapp.handleToggle(11);
		expect(todoapp.state.todos[0].completed).toBe(false);
		expect(todoapp.state.todos[0].completedAt).toNotExist();
	});
});