var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoAdd = require('TodoAdd');

describe('TodoAdd', () => {
	it('should exist', () =>{
		expect(TodoAdd).toExist();
	});
	it('should recognize if valid input entered', () => {
	var spy = expect.createSpy();
	var todoaddform = TestUtils.renderIntoDocument(<TodoAdd onSearch={spy}/>)
	var $el = $(ReactDOM.findDOMNode(todoaddform));

	todoaddform.refs.todo.value = 'mom';
	TestUtils.Simulate.submit($el.find('form')[0]);

	expect(spy).toHaveBeenCalledWith('mom');
	});
	it('should recognize if invalid input entered', () => {
	var spy = expect.createSpy();
	var todoaddform = TestUtils.renderIntoDocument(<TodoAdd onSearch={spy}/>)
	var $el = $(ReactDOM.findDOMNode(todoaddform));

	todoaddform.refs.todo.value = '';
	TestUtils.Simulate.submit($el.find('form')[0]);

	expect(spy).toNotHaveBeenCalled('');
	});
});