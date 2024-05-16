import { Component} from '@angular/core';
import { Router } from '@angular/router'; 
import { NewTodoPage } from '../new-todo/new-todo.page';
import todos from 'src/data/todos';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos: {
    id: number;
    title: string;
    description: string;
    complete: boolean;
  }[] | undefined;
  
  constructor(public mdalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.todos = todos;
  }

  async openTodoModal() {
    const modal = await this.mdalController.create({
      component: NewTodoPage,
    });
    return await modal.present();
  }

  openNewTodo(todoId: any) {
    this.router.navigate(['/todo'], {queryParams: {id: todoId}});
  }
  
  deleteTodo(event: any, todoId: number) {
    event.stopPropagation(); // 클릭 이벤트 전파 방지
    if (this.todos) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
  }
}
