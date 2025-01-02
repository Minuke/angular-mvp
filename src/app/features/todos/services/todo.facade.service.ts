import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoStore } from '../store/todo.store';
import { TodoAdapterService } from './todo.adapter.service';
import { TodoState } from '../store/todo.state';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoStore = inject(TodoStore);
  private todoAdapter = inject(TodoAdapterService);

  // Expone el estado del store como un observable.
  public state$: Observable<TodoState> = this.todoStore.state$;

  public loadTodos(): void {
    this.todoStore.setState({ isLoading: true, error: null });

    this.todoAdapter.fetchTodos().subscribe({
      next: (todos) => {
        this.todoStore.setState({ todos, isLoading: false });
      },
      error: (err) => {
        this.todoStore.setState({ error: err.message, isLoading: false });
      },
    });
  }
}
