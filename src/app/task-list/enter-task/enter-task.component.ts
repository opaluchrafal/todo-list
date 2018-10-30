import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enter-task',
  templateUrl: './enter-task.component.html',
  styleUrls: ['./enter-task.component.scss', '../../ui/button/button.scss']
})
export class EnterTaskComponent {
  @Output()
  taskEntered = new EventEmitter();

  enterTask(titleInput) {
    this.taskEntered.emit(titleInput.value);
    titleInput.value = '';
    titleInput.focus();
  }

  constructor() {}
}
