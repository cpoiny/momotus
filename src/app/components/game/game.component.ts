import { Component } from '@angular/core';
import { MotusService } from 'src/app/services/motus.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  joueur!: string | undefined;
  mot :string= "test";
  keyboard: string[] = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'W', 'X', 'C', 'V', 'B', 'N'];

  supprimer: string = "Supprimer";
  valider: string = "Valider";

  constructor(
    public motusService : MotusService
  ){}

  ngOnInit(){
    this.joueur = this.motusService.prenom;
  }
}
