import { inject, Injectable } from '@angular/core';
import { Todo } from '@entities/interfaces/todo.interface';
import { Observable } from 'rxjs';
import { TodoClientService } from './todo-client.service';

@Injectable({
  providedIn: 'root'
})
export class TodoAdapterService {

  private todoClient = inject(TodoClientService);

  public fetchTodos(): Observable<Todo[]> {
    return this.todoClient.getTodos();
  }
}
