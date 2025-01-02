import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSmartComponent } from './todo-smart.component';

describe('TodoSmartComponent', () => {
  let component: TodoSmartComponent;
  let fixture: ComponentFixture<TodoSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoSmartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
