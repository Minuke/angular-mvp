import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDummyComponent } from './todo-dummy.component';

describe('TodoDummyComponent', () => {
  let component: TodoDummyComponent;
  let fixture: ComponentFixture<TodoDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDummyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
