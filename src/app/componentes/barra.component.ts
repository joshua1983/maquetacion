import { Component, OnInit } from '@angular/core';
import { Usuario } from './commons/usuario';
import { AutenticacionService } from './servicios/login.service';

@Component({
    moduleId: module.id,
    selector: 'barra-aulas',
    templateUrl: './barra.component.html',
    styleUrls: ['./barra.component.css']
})

export class BarraComponent implements OnInit{
    usuario: Usuario

    constructor(private Autenticacion : AutenticacionService ){
        this.usuario = {
            usuario: "",
            clave: "",
            valido: false
        }
    }
    ngOnInit(){
        this.usuario = this.Autenticacion.autenticar();
    }
    
}