import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  showCompleted: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });

    // Optionnel: si vous souhaitez récupérer les tâches terminées uniquement
    // this.showCompleted = this.route.snapshot.data['showCompleted'] || false;
  }

  toggleCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
