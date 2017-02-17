import { Component } from '@angular/core';
import { AutenticacionService } from './servicios/login.service';
import { Usuario} from './commons/usuario';

@Component({
    moduleId: module.id,
    selector: 'login-aulas',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    usuario: Usuario;
    constructor(private Autenticacion: AutenticacionService){

    }
    autenticar(){

        this.usuario = this.Autenticacion.autenticar();
        
    }
}