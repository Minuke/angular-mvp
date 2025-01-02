import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '@entities/interfaces/todo.interface';
import { TodoService } from '../../../services/todo.facade.service';
import { TodoDummyComponent } from '../../ui/todo-dummy/todo-dummy.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-smart',
  imports: [CommonModule, TodoDummyComponent],
  templateUrl: './todo-smart.component.html',
  styleUrl: './todo-smart.component.scss'
})
export class TodoSmartComponent implements OnInit {

  private todoService = inject(TodoService);

  // El estado ahora proviene del servicio (fachada).
  public state$ = this.todoService.state$;

  public ngOnInit(): void {
    this.todoService.loadTodos();
  }

  public onTodoSelected(todo: Todo): void {
    console.log('Selected TODO:', todo);
  }
}
