// todolist.js
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 초기 데이터 불러오기
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
  todoList.innerHTML = ''; 
  
  todos.forEach((todo, index) => {
    // 1. li (Item) 생성
    const li = document.createElement('li');
    li.className = 'todo-app__list-item'; // BEM 클래스 적용
    
    // 2. Checkbox 생성
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-app__checkbox';
    checkbox.checked = todo.completed;

    // 3. Text (Span) 생성
    const span = document.createElement('span');
    span.className = 'todo-app__text';
    if(todo.completed) {
      span.classList.add('todo-app__text--completed'); // Modifier 적용
    }
    span.textContent = todo.text;

    // 4. Delete Button 생성
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'todo-app__delete-button';
    deleteBtn.innerHTML = '&times;';

    // 5. 트리 조립 및 렌더링
    li.append(checkbox, span, deleteBtn);
    todoList.appendChild(li);

    // --- 이벤트 리스너 ---

    // 체크박스 상태 변경
    checkbox.addEventListener('change', () => {
      todos[index].completed = checkbox.checked;
      span.classList.toggle('todo-app__text--completed', checkbox.checked);
      saveTodos();
    });

    // 삭제 기능 (index를 활용하여 더 정확하게 수정)
    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1); // 배열에서 해당 인덱스 삭제
      saveTodos();
      renderTodos(); // 리스트 재렌더링 (인덱스 동기화를 위함)
    });
  });
}

// 로컬 스토리지 저장
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// 할 일 추가 함수
function addTodo() {
  const todoText = todoInput.value.trim();
  if(todoText === '') {
    alert('할 일을 입력해줘! 🥰');
    return;
  }

  const newTodo = {
    text: todoText,
    completed: false,
  };

  todos.push(newTodo);
  todoInput.value = '';

  saveTodos();
  renderTodos();
}

// 이벤트 연결
addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keydown', event => {
  if(event.key === 'Enter') {
    addTodo();
  }
});

// 초기 실행
window.onload = renderTodos;