import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId: number = 1;

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  getTodoById(id: number): Observable<Todo | undefined> {
    return of(this.todos.find(todo => todo.id === id));
  }

  addTodo(todo: Todo): void {
    todo.id = this.nextId++;
    this.todos.push(todo);
  }

  updateTodo(todo: Todo): void {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index > -1) {
      this.todos[index] = todo;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
