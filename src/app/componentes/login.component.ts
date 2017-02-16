import { Component } from '@angular/core';
import { AutenticacionService } from './servicios/login.service';

@Component({
    moduleId: module.id,
    selector: 'login-aulas',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    usuario: string
    clave: string
}