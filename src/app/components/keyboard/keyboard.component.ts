import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {

  @Input() item!: string;
  @Output() onClickLetter = new EventEmitter();

  propositions!: string[] | null;


  getValueLetter(){
    // console.log("ma lettre", this.item);
    this.onClickLetter.emit(this.item);
  }


}
