import { Injectable } from '@angular/core';
import { Usuario }  from '../commons/usuario';

@Injectable()

export class AutenticacionService{
    private usuario: any;

    constructor(){
        this.usuario = {};
    }

    autenticar(){
        
        
        this.usuario.usuario = "josue.barrios@gmail.com";
        this.usuario.clave = "123";
        this.usuario.valido = true;
        return this.usuario;
        
    }


}
