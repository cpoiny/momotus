import { Component } from '@angular/core';

import { MatDialog} from '@angular/material/dialog';
import { MotusService } from 'src/app/services/motus.service';
import { ReglesComponent } from '../regles/regles.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  joueur!: string | undefined;
  mot :string = "";
  keyboard: string[] = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'W', 'X', 'C', 'V', 'B', 'N'];

  supprimer: string = "Supprimer";
  valider: string = "Valider";

  liste : string[] = ["PASTEQUE", "MAISON", "MANGER", "ORDINATEUR"]

  bodyText!: string;

  constructor(
    public motusService : MotusService,
    public dialog: MatDialog
   
  ){}

  ngOnInit(){
    this.joueur = this.motusService.prenom;
    this.choisirMotDansLaListe();
    console.log("le mot choisi est", this.choisirMotDansLaListe());

  }

  updateValueLetter(lettre:string){
    this.mot +=lettre;
    console.log("mon mot", this.mot);
  }

  choisirMotDansLaListe(): string {
    let index = Math.floor(Math.random() * this.liste.length);
    var motATrouver = this.liste[index];
    this.motusService.getMotATrouver(motATrouver);
    return motATrouver;
  }

  openDialog() {
    this.dialog.open(ReglesComponent);
  }


}




   

