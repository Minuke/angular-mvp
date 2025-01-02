import { TestBed } from '@angular/core/testing';

import { TodoAdapterService } from './todo-adapter.service';

describe('TodoAdapterService', () => {
  let service: TodoAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
