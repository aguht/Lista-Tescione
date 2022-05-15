import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.scss']
})
export class ListaEstudiantesComponent implements OnInit {

  estudiantes=[
    {
      nombre: 'mariano',
      apellido: 'ortiz',
      nacimiento: new Date(1990,5,12),
      nota: 8,
      curso: 'diseño ux/ui',
    },
    {
      nombre: 'laura',
      apellido: 'gimenez',
      nacimiento: new Date(1998,25,2),
      nota: 6,
      curso: 'python',
    },
    {
      nombre: 'jimena',
      apellido: 'perez',
      nacimiento: new Date(1994,17,5),
      nota: 9,
      curso: 'javaScript',
    },
    {
      nombre: 'maria',
      apellido: 'sabala',
      nacimiento: new Date(2002,14,7),
      nota: 6,
      curso: 'diseño ux/ui',
    },
    {
      nombre: 'gustavo',
      apellido: 'lopez',
      nacimiento: new Date(2000,6,10),
      nota: 5,
      curso: 'react',
    },
    {
      nombre: 'marcos',
      apellido: 'andrada',
      nacimiento: new Date(1991,23,11),
      nota: 3,
      curso: 'marketing digital',
    },
    {
      nombre: 'esteban',
      apellido: 'benitez',
      nacimiento: new Date(1989,10,1),
      nota: 10,
      curso: 'data analytics',
    },
    {
      nombre: 'micaela',
      apellido: 'reinoso',
      nacimiento: new Date(1997,5,4),
      nota: 9,
      curso: 'ciberseguridad',
    },
    {
      nombre: 'martin',
      apellido: 'toledo',
      nacimiento: new Date(1993,28,1),
      nota: 4,
      curso: 'sql',
    },
    {
      nombre: 'lorena',
      apellido: 'ramirez',
      nacimiento: new Date(2003,1,9),
      nota: 2,
      curso: 'ciberseguridad',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
