import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss', '../button/button.scss']
})
export class ToggleComponent implements OnInit {
  // Lista obiektów, która zostanie wykorzystana jako wartości przycisku.
  @Input()
  buttonList;
  // Wejście i stan informujący, który przycisk jest wybrany, muszą odnosić się do obiektu
  // w buttonList.
  @Input()
  selectedButton;
  // Emiter zdarzeń po zmianie selectedButton wykorzystuje dowiązanie dwukierunkowe
  // o składni [(selected-button)].
  @Output()
  selectedButtonChange = new EventEmitter();

  constructor() {}
  // Funkcja zwrotna cyklu życia komponentu wywoływana po tym, jak konstruktor i dane
  // wejściowe zostały ustawione.
  ngOnInit() {
    if (this.selectedButton === undefined) {
      this.selectedButton = this.buttonList[0];
    }
  }
  // Funkcja wybierająca wybrany przycisk i emitująca zdarzenie.
  onButtonActivate(button) {
    this.selectedButton = button;
    this.selectedButtonChange.emit(button);
  }
}
