var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});
	it('should call onSearch with entered input text', () => {
	var spy = expect.createSpy();
	var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
	var $el = $(ReactDOM.findDOMNode(todosearch));

	todosearch.refs.searchText.value = 'Mom';
	TestUtils.Simulate.change(todosearch.refs.searchText);

	expect(spy).toHaveBeenCalledWith(false, 'Mom');
	});
	it('should call onSearch with proper checked value', () => {
	var spy = expect.createSpy();
	var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
	var $el = $(ReactDOM.findDOMNode(todosearch));

	todosearch.refs.showCompleted.checked = true;
	todosearch.refs.searchText.value = 'Mom';
	TestUtils.Simulate.change(todosearch.refs.showCompleted);

	expect(spy).toHaveBeenCalledWith(true, 'Mom');
	});
});