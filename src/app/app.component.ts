import { Component } from '@angular/core';

interface Elemento{
  icono: string;
  nombre:string;
  ruta:string;
  }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  elementos: Elemento[]=[
    { //Primer elemento de la lista
    icono: 'images-outline',
    nombre:'Galeria',
    ruta:'/galeria'
    },
    { //Primer elemento de la lista
      icono: 'game-controller-outline',
      nombre:'Controles',
      ruta:'/controles'
      },
    { //Primer elemento de la lista
      icono: 'body-outline',
      nombre:'Personajes e Items',
      ruta:'/personajes'
      },
    ];
  constructor() {}
}
