import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./todo-item.component.css'],
  standalone: true,

})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggleCompleted = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<number>();

  onToggleCompleted(): void {
    this.toggleCompleted.emit(this.todo);
  }

  onDelete(): void {
    this.delete.emit(this.todo.id);
  }
}
