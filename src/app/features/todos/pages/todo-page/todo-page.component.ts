import { Component } from '@angular/core';
import { TodoSmartComponent } from '@features/todos/components/logic/todo-smart/todo-smart.component';

@Component({
  selector: 'app-todo-page',
  imports: [TodoSmartComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {

}
