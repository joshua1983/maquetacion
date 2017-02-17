import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './componentes/app.component';
import { LoginComponent } from './componentes/login/login.component';
import { BarraComponent } from './componentes/barra.component';
import { ListadoComponent } from './componentes/listado.component';
import { CursoComponent } from './componentes/curso/curso.component'

@NgModule({
  declarations: [
    AppComponent, LoginComponent, BarraComponent, ListadoComponent, CursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
