// 4. 새로운 배열 요소 추가

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// const addTodo = (todos, newTodo) => { return [newTodo].concat(todos) };
const addTodo = (todos, newTodo) => [newTodo, ...todos];

todos = addTodo(todos, { id: 4, content: 'Test', completed: false });
console.log(todos);
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/