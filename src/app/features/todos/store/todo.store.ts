import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoState } from './todo.state';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  private readonly _state = new BehaviorSubject<TodoState>({
    todos: [],
    isLoading: false,
    error: null,
  });

  readonly state$ = this._state.asObservable();

  private get state(): TodoState {
    return this._state.getValue();
  }

  public setState(newState: Partial<TodoState>): void {
    this._state.next({ ...this.state, ...newState });
  }
}
