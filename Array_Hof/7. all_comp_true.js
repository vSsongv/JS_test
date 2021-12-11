// 7. 모든 배열 요소의 completed 프로퍼티 값을 true로 설정

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const toggleCompletedAll = todos =>
  // return todos.map(item => { item.completed = true; return item }) //map썼던 코드
  todos.map(todo => ({ ...todo, completed: true }));

todos = toggleCompletedAll(todos);
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/