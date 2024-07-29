import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/completed', component: TodoListComponent },
  { path: 'todos/new', component: TodoFormComponent },
  { path: 'todos/edit/:id', component: TodoFormComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
