import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '@entities/interfaces/todo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoClientService {

  public http: HttpClient = inject(HttpClient);

  private readonly API_URL = 'https://jsonplaceholder.typicode.com/todos';

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }
  
}
