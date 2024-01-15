import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotusService {

 @Input() prenom?:string;
 @Input() motATrouver?: string;
  
 getName(name: string){
this.prenom = name;
 }

 getMotATrouver(word: string){
  this.motATrouver = word;
 }

}
