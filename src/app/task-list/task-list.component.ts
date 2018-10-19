import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor() {
    this.tasks = [
      { title: 'Zadanie 1', done: false },
      { title: 'Zadanie 2', done: true }
    ];
  }
  ngOnInit() {}
}
