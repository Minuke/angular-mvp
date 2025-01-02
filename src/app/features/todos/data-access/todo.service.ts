import { inject, Injectable } from "@angular/core";
import { TodoStore } from "../store/todo.store";
import { TodoClientService } from "./todo-client.service";


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoStore: TodoStore = inject(TodoStore);
  public todoClient: TodoClientService = inject(TodoClientService);

  public loadTodos(): void {
    this.todoStore.setState({ isLoading: true, error: null });

    this.todoClient.getTodos().subscribe({
      next: (todos) => {
        this.todoStore.setState({ todos, isLoading: false });
      },
      error: (err) => {
        this.todoStore.setState({ error: err.message, isLoading: false });
      },
    });
  }
}
