import { Component, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MotusService } from 'src/app/services/motus.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    public route: Router,
    public motusService: MotusService
  ){}

@Output() prenom?:string | null;
name = new FormControl('');

onSubmit(){
  this.prenom = this.name.value;
  console.log(this.prenom);
  this.motusService.getName(this.prenom!);
  if (this.prenom !== ""){
    this.route.navigate(['game']);
  }
}



}
