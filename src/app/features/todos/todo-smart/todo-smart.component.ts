import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '@entities/interfaces/todo.interface';
import { TodoService } from '../data-access/todo.service';
import { TodoDummyComponent } from '../todo-dummy/todo-dummy.component';
import { CommonModule } from '@angular/common';
import { TodoStore } from '../store/todo.store';

@Component({
  selector: 'app-todo-smart',
  imports: [CommonModule, TodoDummyComponent],
  templateUrl: './todo-smart.component.html',
  styleUrl: './todo-smart.component.scss'
})
export class TodoSmartComponent implements OnInit {

  public todoStore = inject(TodoStore);
  public todoService = inject(TodoService);

  public state$ = this.todoStore.state$;

  public ngOnInit(): void {
    this.todoService.loadTodos();
  }

  public onTodoSelected(todo: Todo): void {
    console.log('Selected TODO:', todo);
  }
}
