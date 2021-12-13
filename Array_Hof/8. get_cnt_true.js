// 8. 배열 요소의 completed 프로퍼티의 값이 true인 요소의 갯수 구하기

const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
];

//filter이용
const countCompletedTodos = todos => todos.filter(todo => todo.completed).length;
//reduce 이용
// const countCompletedTodos = todos => todos.reduce((cnt, todo) => (todo.completed ? cnt += 1 : cnt), 0);

console.log(countCompletedTodos(todos)); // 1