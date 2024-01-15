import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mot',
  templateUrl: './mot.component.html',
  styleUrls: ['./mot.component.css']
})
export class MotComponent {

// recoit le mot saisi sur le clavier
  @Input() mot! :string;
}
