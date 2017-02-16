import { Component, Input } from '@angular/core';
import { Curso } from '../commons/curso';

@Component({
    moduleId: module.id,
    selector: 'curso-aulas',
    templateUrl: './curso.component.html',
    styleUrls: ['./curso.component.css']
})


export class CursoComponent{
    @Input()
    curso: Curso
    
}