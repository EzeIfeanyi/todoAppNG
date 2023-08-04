import { Injectable } from "@angular/core";
import { Todo } from "../models/todo.model";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    
    todos: Todo[] = [
        {
            Id: 1,
            title: "Get to school",
            description: "It is quite far, so I have to wake early to make it"
        },
        {
            Id: 2,
            title: "Clean the house",
            description: "It is quite far, so I have to wake early to make it"
        },
        {
            Id: 3,
            title: "Get water from the store",
            description: "It is quite far, so I have to wake early to make it"
        },
        {
            Id: 4,
            title: "Change the curtain",
            description: "It is quite far, so I have to wake early to make it"
        },
        {
            Id: 5,
            title: "Help the colonel with his task",
            description: "It is quite far, so I have to wake early to make it"
        }
    ];

    getAll(): Todo[] {
        return this.todos;
    }

    updateTodo(todo: Todo) {
        this.todos = this.todos.filter(t => t.Id !== todo.Id);
        this.todos.push(todo);
    }

    deleteTodo(todo: Todo) {
        this.todos = this.todos.filter(
            item => item.title !== todo.title
        );
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }
}