import { Component, Input } from '@angular/core';
import { MotusService } from 'src/app/services/motus.service';

@Component({
  selector: 'app-mot',
  templateUrl: './mot.component.html',
  styleUrls: ['./mot.component.css']
})
export class MotComponent {

  constructor(
    public motusService : MotusService
  ){}


// recoit le mot saisi sur le clavier
  @Input() mot! :string;
  motATrouver!: string | undefined;
  premiereLettre!: string;
  

  ngOnInit(){

    this.motATrouver = this.motusService.motATrouver;
    console.log('mot a trouver', this.motATrouver);
    const decouperMotATrouver = this.motATrouver?.split('');
    this.premiereLettre = decouperMotATrouver![0];
  }

  // creerGrille(){
  //   this.grille = this.motATrouver?.split("");
  //   console.log("ma grille", this.grille);
  // }

}
