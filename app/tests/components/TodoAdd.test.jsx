var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {TodoAdd} = require('TodoAdd');

describe('TodoAdd', () => {
	it('should exist', () =>{
		expect(TodoAdd).toExist();
	});
	it('should dispatch ADD_TODO when valid todo text', () => {
	var todoText = 'run';
	var action = actions.startAddTodo(todoText);
	
	var spy = expect.createSpy();
	var todoaddform = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>)
	var $el = $(ReactDOM.findDOMNode(todoaddform));

	todoaddform.refs.todo.value = 'mom';
	TestUtils.Simulate.submit($el.find('form')[0]);

	expect(spy).toHaveBeenCalledWith(action);
	});
	it('should not dispatch ADD_TODO when invalid todo text', () => {
	var spy = expect.createSpy();
	var todoaddform = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>)
	var $el = $(ReactDOM.findDOMNode(todoaddform));

	todoaddform.refs.todo.value = '';
	TestUtils.Simulate.submit($el.find('form')[0]);

	expect(spy).toNotHaveBeenCalled('');
	});
});