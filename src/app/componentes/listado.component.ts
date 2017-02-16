import { Component } from '@angular/core';
import { CursoComponent } from './curso/curso.component'
import { Curso } from './commons/curso'

@Component({
    moduleId: module.id,
    selector: 'listado-aulas',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})

export class ListadoComponent{
    CURSOS: Curso [] = [
        {
            nombre: "PET",
            area: "Biologia",
            niveles: ["7°", "8°", "9°"],
            imagen: "img/perrito.png"
        }
    ]
}