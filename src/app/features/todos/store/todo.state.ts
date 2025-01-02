import { Todo } from "@entities/interfaces/todo.interface";

export interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
}