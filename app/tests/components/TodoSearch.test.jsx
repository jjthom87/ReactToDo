var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch'

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});
	it('should dispatch SET_SEARCH_TEXT on input change', () => {
	var spy = expect.createSpy();
	var action = {
		type: 'SET_SEARCH_TEXT',
		searchText: 'Mom'
	};
	var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)
	var $el = $(ReactDOM.findDOMNode(todosearch));

	todosearch.refs.searchText.value = 'Mom';
	TestUtils.Simulate.change(todosearch.refs.searchText);

	expect(spy).toHaveBeenCalledWith(action);
	});
	it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
	var spy = expect.createSpy();
	var action = {
		type: 'TOGGLE_SHOW_COMPLETED',
	}
	var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)
	var $el = $(ReactDOM.findDOMNode(todosearch));

	todosearch.refs.showCompleted.checked = true;
	todosearch.refs.searchText.value = 'Mom';
	TestUtils.Simulate.change(todosearch.refs.showCompleted);

	expect(spy).toHaveBeenCalledWith(action);
	});
});