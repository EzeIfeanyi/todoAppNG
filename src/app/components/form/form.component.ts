import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title!: string ;

  constructor(private todoService: TodoService) { }

  ngOnInit() : void { }

  onSubmit() { 
    this.title = "";
  }

  addTodo() {
    let todo : Todo = {
      Id: this.todoService.getAll.length + 1,
      title: this.title,
      description: ""
    };
    this.todoService.addTodo(todo);
  }
}
