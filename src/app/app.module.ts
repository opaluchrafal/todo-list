import { MaterialModule } from './shared/modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent, TaskListComponent],
  imports: [BrowserModule, FormsModule, MaterialModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
