import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Task } from './../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  // Model task może zostać dołączony w elemencie nadrzędnym w widoku.
  @Input()
  task: Task;

  constructor() {}

  ngOnInit() {}
}
