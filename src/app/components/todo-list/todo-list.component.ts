import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = "Tasks";
  myValue: string = "My Value";
  TodoList!: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.TodoList = this.todoService.getAll();
    
  }

  onEdit(todo: Todo) {
    let inputArray = document.querySelectorAll(".text");
    let editArray = document.querySelectorAll(".edit");

    let edit = Array.from(document.querySelectorAll(".edit")).filter(t => Number(t.id) == todo.Id)[0];
    let index = Array.from(document.querySelectorAll(".edit")).indexOf(edit);

    let input = inputArray.item(index);
    // let edit = editArray.item(editArray.length - (editArray.length - (todo.Id - 1)))
    
    if (edit.innerHTML.toLowerCase() == "edit") {
      input.removeAttribute("readonly")
      edit.innerHTML = "Save";
    } else {
      
      if (input.nodeValue !== null) {
        todo.title = input.nodeValue;
      }

      edit.innerHTML = "Edit";
      input.setAttribute("readonly", "readonly");
    }

  }

  onDelete(todo: Todo) {
    this.todoService.deleteTodo(todo);
    this.TodoList = this.todoService.getAll();
  }
}
