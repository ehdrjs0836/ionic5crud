import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTodoPageRoutingModule } from './new-todo-routing.module';

import { NewTodoPage } from './new-todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTodoPageRoutingModule
  ],
  declarations: [NewTodoPage]
})
export class NewTodoPageModule {}
