import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTodoPage } from './new-todo.page';

describe('NewTodoPage', () => {
  let component: NewTodoPage;
  let fixture: ComponentFixture<NewTodoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
