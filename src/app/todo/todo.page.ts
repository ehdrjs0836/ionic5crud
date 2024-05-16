import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import todos from 'src/data/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  todo: {
    id: number;
    title: string;
    description: string;
    complete: boolean;
  } | undefined;

  tempTodo: {
    title: string;
    description: string;
    complete: boolean;
  } = {
    title: '',
    description: '',
    complete: false,
  };

  constructor(private route: ActivatedRoute) {}

  
  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      const id = param['id'];
      const fooundTodo = todos.find(todo => todo.id == id);

      if (fooundTodo) {
        this.todo = fooundTodo;
        // 실제 todo 객체의 값을 임시 todo 객체에 복사
        this.tempTodo.title = fooundTodo.title;
        this.tempTodo.description = fooundTodo.description;
        this.tempTodo.complete = fooundTodo.complete;
      }
    });
  }

  saveChanges() {
    if (this.todo) {
      // 임시 todo 객체의 데이터를 실제 todo 객체에 저장
      this.todo.title = this.tempTodo.title;
      this.todo.description = this.tempTodo.description;
      this.todo.complete = this.tempTodo.complete;

      console.log('Todo updated:', this.todo);
    }
  }
}
