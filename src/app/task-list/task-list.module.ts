import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/modules/material.module';

import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task/task.component';
import { EnterTaskComponent } from './enter-task/enter-task.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, FlexLayoutModule],
  declarations: [TaskListComponent, TaskComponent, EnterTaskComponent],
  exports: [TaskListComponent]
})
export class TaskListModule {}
