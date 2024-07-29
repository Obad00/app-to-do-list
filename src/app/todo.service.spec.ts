import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a todo', () => {
    const todo: Todo = { id: 1, title: 'Test', completed: false };
    service.addTodo(todo);
    service.getTodos().subscribe(todos => {
      expect(todos).toContain(todo);
    });
  });
});
