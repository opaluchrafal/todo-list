import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../../shared/modules/material.module';
import { EnterTaskComponent } from './enter-task.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  declarations: [EnterTaskComponent],
  exports: [EnterTaskComponent]
})
export class EnterTaskModule {}
