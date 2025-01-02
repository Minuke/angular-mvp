import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoSmartComponent } from '@features/todos/components/logic/todo-smart/todo-smart.component';
import { TodoPageComponent } from './features/todos/pages/todo-page/todo-page.component';

@Component({
  selector: 'app-root',
  imports: [TodoPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-mvp';
}
