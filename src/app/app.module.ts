import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudiantesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
