import { Component } from '@angular/core';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  // Ustaw TaskListService jako dostawcę.
  providers: [TaskListService]
})
export class TaskListComponent {
  taskFilterList = ['wszystkie', 'otwarte', 'wykonane'];
  selectedTaskFilter = 'wszystkie';

  // Wstrzyknij TaskListService i określ dane do filtrowania.
  constructor(private taskListService: TaskListService) {
    this.taskListService = taskListService;
  }
  // Metoda zwraca przefiltrowaną listę zadań na podstawie wybranego rodzaju filtrowania.
  getFilteredTasks() {
    return this.taskListService.tasks
      ? this.taskListService.tasks.filter(task => {
          if (this.selectedTaskFilter === 'wszystkie') {
            return true;
          } else if (this.selectedTaskFilter === 'otwarte') {
            return !task.done;
          } else {
            return task.done;
          }
        })
      : [];
  }

  // Function added task from view
  addTask(title) {
    this.taskListService.tasks.push({
      title,
      done: false
    });
  }
}
