import { Injectable } from '@angular/core';
import { Usuario }  from '../commons/usuario';

@Injectable()

export class AutenticacionService{
    private usuario: Usuario;

    constructor(){
        
    }

    autenticar(){
        if (this.usuario.valido == false){
            // consultar en el api de la base de datos
            this.usuario.usuario = "josue.barrios@gmail.com";
            this.usuario.clave = "123";
            this.usuario.valido = true;
            return this.usuario;
        }else{
            return this.usuario;
        }
    }


}
