// https://poiemaweb.com/ex
// 1. html 생성

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

/** @type {(todos: any[]) => string} */

const render = todos => todos.map(({ id, content, completed }) =>
  `<li id="${id}">
    <label><input type="checkbox" ${completed ? 'checked' : ''}>${content}</label>
  </li>`
).join('')

console.log(render(todos));

/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
