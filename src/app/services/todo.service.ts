import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: 1,
        content: 'First todo',
        completed: false
      },
      {
        id: 2,
        content: 'Second todo',
        completed: true
      }
    ]
  }

  add(todo: Todo) {
    let maxId = 0;
    this.todos.map((e) => {
      maxId = Math.max(maxId, e.id);
    });

    todo.id = maxId + 1;
    this.todos.push(todo);
  }

  remove(id: number) {
    let idIndex = this.todos.findIndex(e => e.id == id);
    this.todos.splice(idIndex, 1);
  }

}
