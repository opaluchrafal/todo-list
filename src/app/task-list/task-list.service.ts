import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  tasks: Task[];
  constructor() {
    this.tasks = [
      { title: 'Zadanie 1', done: false },
      { title: 'Zadanie 2', done: false },
      { title: 'Zadanie 3', done: true },
      { title: 'Zadanie 4', done: false }
    ];
  }
}
