// 6. 특정 배열 요소의 프로퍼티 값 반전

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const toggleCompletedById = (todos, id) =>
  todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);

todos = toggleCompletedById(todos, 2);
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/