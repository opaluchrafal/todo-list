import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostBinding
} from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-task-list',

  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor() {
    this.tasks = [
      { title: 'Zadanie 1', done: false },
      { title: 'Zadanie 2', done: true }
    ];
  }

  //@HostBinding('task-list')

  ngOnInit() {}
}
