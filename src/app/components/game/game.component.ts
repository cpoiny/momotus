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
  motATrouver!: string;
  lettre! : string;
  listeDeProposition!: string[];
  keyboard: string[] = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'W', 'X', 'C', 'V', 'B', 'N'];

  supprimer: string = "Supprimer";
  valider: string = "Valider";

  liste : string[] = ["PASTEQUE", "PRESSION", "REGARDER", "ETUDIANT"]


  constructor(
    public motusService : MotusService,
    public dialog: MatDialog
   
  ){}

  ngOnInit(){
    this.joueur = this.motusService.prenom;
    this.listeDeProposition = [];
    this.choisirMotDansLaListe();
  }

  updateValueLetter(lettre:string){
    this.listeDeProposition.push(this.motATrouver[0]);
    if(this.mot.length <= 8){
      this.mot +=lettre;
      this.lettre = lettre;
    }
    if (this.mot.length == 7){
      this.verifierProposition();
    }
  }

  choisirMotDansLaListe(): string {
    let index = Math.floor(Math.random() * this.liste.length);
    const motATrouver = this.liste[index];
    this.motATrouver = motATrouver;
    this.motusService.getMotATrouver(motATrouver);
    return motATrouver;
  }

  openDialog() {
    this.dialog.open(ReglesComponent);
  }

  verifierProposition() {
    this.listeDeProposition.push(this.mot);
    this.motusService.checkMot(this.mot);

  }

 

}




   

