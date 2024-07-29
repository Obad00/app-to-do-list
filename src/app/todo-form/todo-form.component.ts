import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  imports: [FormsModule, ReactiveFormsModule],
  styleUrls: ['./todo-form.component.css'],
  standalone: true,
})
export class TodoFormComponent implements OnInit {
  form: FormGroup;
  todoId?: number;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      completed: [false]
    });
  }

  ngOnInit(): void {
    this.todoId = +this.route.snapshot.paramMap.get('id')!;
    if (this.todoId) {
      this.todoService.getTodoById(this.todoId).subscribe(todo => {
        if (todo) {
          this.form.patchValue(todo);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const todo: Todo = this.form.value;
      if (this.todoId) {
        todo.id = this.todoId;
        this.todoService.updateTodo(todo);
      } else {
        this.todoService.addTodo(todo);
      }
      this.router.navigate(['/todos']);
    }
  }
}
