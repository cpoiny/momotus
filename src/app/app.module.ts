import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MotComponent } from './components/mot/mot.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ButtonComponent } from './components/button/button.component';
import { ModaleComponent } from './components/modale/modale.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReglesComponent } from './components/regles/regles.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    HeaderComponent,
    MotComponent,
    KeyboardComponent,
    ButtonComponent,
    ModaleComponent,
    ReglesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
