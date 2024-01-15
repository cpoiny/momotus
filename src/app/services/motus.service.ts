import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotusService {

 @Input() prenom?:string;
  
 getName(name: string){
this.prenom = name;
 }

}
