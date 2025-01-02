import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoSmartComponent } from '@features/todos/todo-smart/todo-smart.component';

@Component({
  selector: 'app-root',
  imports: [TodoSmartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-mvp';
}
