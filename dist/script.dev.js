"use strict";

window.addEventListener('load', function () {
  var form = document.querySelector("#new-todo-form");
  var input = document.querySelector("#new-todo-input");
  var list_el = document.querySelector("#todo");
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var todo = input.value;
    var todo_el = document.createElement('div');
    todo_el.classList.add('todo');
    var todo_content_el = document.createElement('div');
    todo_content_el.classList.add('content');
    todo_el.appendChild(todo_content_el);
    var todo_input_el = document.createElement('input');
    todo_input_el.classList.add('text');
    todo_input_el.type = 'text';
    todo_input_el.value = todo;
    todo_input_el.setAttribute('readonly', 'readonly');
    todo_content_el.appendChild(todo_input_el);
    var todo_actions_el = document.createElement('div');
    todo_actions_el.classList.add('actions');
    var todo_edit_el = document.createElement('button');
    todo_edit_el.classList.add('edit');
    todo_edit_el.innerText = 'Edit';
    var todo_delete_el = document.createElement('button');
    todo_delete_el.classList.add('delete');
    todo_delete_el.innerText = 'Delete';
    todo_actions_el.appendChild(todo_edit_el);
    todo_actions_el.appendChild(todo_delete_el);
    todo_el.appendChild(todo_actions_el);
    list_el.appendChild(todo_el);
    input.value = '';
    todo_edit_el.addEventListener('click', function (e) {
      if (todo_edit_el.innerText.toLowerCase() == "edit") {
        todo_edit_el.innerText = "Save";
        todo_input_el.removeAttribute("readonly");
        todo_input_el.focus();
      } else {
        todo_edit_el.innerText = "Edit";
        todo_input_el.setAttribute("readonly", "readonly");
      }
    });
    todo_delete_el.addEventListener('click', function (e) {
      list_el.removeChild(todo_el);
    });
  });
});