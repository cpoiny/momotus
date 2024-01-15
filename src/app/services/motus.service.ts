import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotusService {

 @Input() prenom?:string;
 @Input() motATrouver?: string;
 isCorrect! : boolean;
 isPresent!: boolean;
 isNotPresent!: boolean;
  
 getName(name: string){
this.prenom = name;
 }

 getMotATrouver(word: string){
  this.motATrouver = word;
 }

 checkMot(mot: string){
  if(mot.length === this.motATrouver!.length){
    const motSaisi = mot.split('');
    const motAComparer = this.motATrouver!.split('');
    this.checkMotAComparer(motSaisi, motAComparer);
    }
  }
 
checkMotAComparer(motSaisi:string[], motAComparer: string[]){
  for(let i =0; i <= motSaisi.length; i++ ){
    if (motSaisi[i] == motAComparer[i]){
      console.log('La lettre '+ motSaisi[i] +" est correctement placé dans le mot" );
      this.isCorrect = true;
   } else if (motSaisi[i] == motAComparer[i++]){
    console.log('La lettre '+ motSaisi[i] +" est presente mais n'est pas correctement placé dans le mot" );
      this.isPresent = true;
   
  }
}

}
}
