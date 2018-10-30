import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CheckboxComponent, ToggleComponent],
  exports: [CheckboxComponent, ToggleComponent]
})
export class UiModule {}
