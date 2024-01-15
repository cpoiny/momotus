import { Component } from '@angular/core';
import { MotusService } from 'src/app/services/motus.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  joueur!: string | undefined

  constructor(
    public motusService : MotusService
  ){}

  ngOnInit(){
    this.joueur = this.motusService.prenom;
  }
}
