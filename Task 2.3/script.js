const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const list  = document.getElementById('todoList');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;

  const btn = document.createElement('button');
  btn.textContent = '✕';
  btn.addEventListener('click', () => li.remove());
  li.appendChild(btn);

  list.appendChild(li);
  input.value = '';
});