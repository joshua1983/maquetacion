import { Component, OnInit } from '@angular/core';
import { Usuario } from './commons/usuario';
import { LoginComponent } from './login.component';
import { AutenticacionService } from './servicios/login.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AutenticacionService]
  
})
export class AppComponent implements OnInit{
  title = 'Aulas Amigas'
  usuario: Usuario

  constructor(private AutenticacionService: AutenticacionService){
    
  }
  ngOnInit(){
    this.usuario = this.AutenticacionService.autenticar();
    console.log(this.usuario);
  }
}
