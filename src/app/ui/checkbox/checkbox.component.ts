import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  // opcjonalna etykieta, ktora mozna nadać opcji
  @Input()
  label;
  // informacja czy checkbox jest zaznaczony
  @Input()
  checked;
  // emitter zdarzeń gdy dochodzi do zmiany stanu zaznaczenia
  // korzysta z konwencji odnoszącej się do dowiazania dwukierunkowego [(checked)]
  @Output()
  checkedChange = new EventEmitter();

  onCheckedChange() {
    this.checkedChange.emit(this.checked);
  }

  constructor() {}

  ngOnInit() {}
}
