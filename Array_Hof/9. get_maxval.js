// 9. 배열 요소의 id 프로퍼티의 값 중에서 최대값 구하기

const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
];
// 배열로 만들고 max 구하기
// const getMaxId = todos => todos.length ? Math.max(...todos.map(todo => todo.id)) : 0;

// reduce 이용
// const getMaxId = todos => todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);

//기본값으로 0 지정.
const getMaxId = todos => Math.max(...todos.map(todo => todo.id), 0);

console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0