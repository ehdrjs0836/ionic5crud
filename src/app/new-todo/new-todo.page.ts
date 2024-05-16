import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import todos from 'src/data/todos';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.page.html',
  styleUrls: ['./new-todo.page.scss'],
})
export class NewTodoPage implements OnInit {
  tempTodo = {
    id: todos.length + 1,
    title: '',
    description: '',
    complete: false
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  saveTodo() {
    todos.push(this.tempTodo);
    this.modalCtrl.dismiss();
  }

  savedismiss() {
    this.modalCtrl.dismiss();
  }
}