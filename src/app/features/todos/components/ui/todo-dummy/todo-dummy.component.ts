import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '@entities/interfaces/todo.interface';

@Component({
  selector: 'app-todo-dummy',
  imports: [CommonModule],
  templateUrl: './todo-dummy.component.html',
  styleUrl: './todo-dummy.component.scss'
})
export class TodoDummyComponent {

  @Input() todos: Todo[] = [];
  @Output() todoSelected = new EventEmitter<Todo>();

  public selectTodo(todo: Todo): void {
    this.todoSelected.emit(todo);
  }
}
