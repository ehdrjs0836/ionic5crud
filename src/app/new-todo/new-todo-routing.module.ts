import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTodoPage } from './new-todo.page';

const routes: Routes = [
  {
    path: '',
    component: NewTodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTodoPageRoutingModule {}
