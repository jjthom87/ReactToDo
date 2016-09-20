var expect = require('expect');

var TodoApi = require('TodoApi');

describe('TodoApi', ()=>{
	beforeEach(() => {
		localStorage.removeItem('todos');
	});
	it('should exist', ()=>{
		expect(TodoApi).toExist();
	});
	describe('setTodos', ()=>{
		it('should set valid todos array', ()=>{
			var todos = [{
				id: 3,
				text: 'hello',
				completed: false
			}];
			TodoApi.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		});
		it('should not set invalid todos array', ()=>{
			var badTodos = {a: 'b'};
			TodoApi.setTodos(badTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		})
	});
	describe('getTodos', ()=>{
		it('should return empty array for bad localstorage data', () =>{
			var actualTodos = TodoApi.getTodos();
			expect(actualTodos).toEqual([]);
		});
		it('should return todo if valid array in localstorage', ()=>{
			var todos = [{
				id: 3,
				text: 'hello',
				completed: false
			}];
			localStorage.setItem('todos', JSON.stringify(todos));

			var actualTodos = TodoApi.getTodos();

			expect(actualTodos).toEqual(todos);
		});
	});
	describe('filterTodos', ()=>{
		var todos = [{
			id: 4,
			text: 'goodbye',
			completed: true
		},{
			id: 5,
			text: 'goodbyes',
			completed: false
		},{
			id: 6,
			text: 'goodbyez',
			completed: true
		}];

		it('should return all items if showCompleted is true', ()=> {

			var filteredTodos = TodoApi.filterTodos(todos, true, '');

			expect(filteredTodos.length).toBe(3);
		});

		it('should return uncompleted if showCompleted is false', ()=> {

			var filteredTodos = TodoApi.filterTodos(todos, false, '');

			expect(filteredTodos.length).toBe(1);
		});

		it('should sort by completed status', ()=>{
			var filteredTodos = TodoApi.filterTodos(todos, true, '');

			expect(filteredTodos[0].completed).toBe(false);
		});

		it('should filter todos by search text', ()=> {

			var filteredTodos = TodoApi.filterTodos(todos, true, 'goodbye');

			expect(filteredTodos.length).toBe(3);
		});

		it('should return all todos if search text is empty', ()=> {

			var filteredTodos = TodoApi.filterTodos(todos, true, '');

			expect(filteredTodos.length).toBe(3);
		});
	});
});