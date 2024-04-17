import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  content: string = "";
  constructor(public todoService: TodoService){    
  }

  addTodo() {
    this.todoService.add(new Todo(0, this.content, false));
  }

  deleteTodo(id: number) {
    this.todoService.remove(id);
  }

}
