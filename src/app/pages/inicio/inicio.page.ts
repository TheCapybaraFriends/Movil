import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component';
import { Personajes, RespuestaBD } from 'src/app/interfaces/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';



@Component({
  standalone: false,
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  personajesRecientes : Personajes[]=[];



  constructor(private servicioPersonajes: PersonajesService,
    private modalCtrl:ModalController
  ) { }

  async verDetalle(id: number){
    /*Dado que es una petición (promesa) es un proceso
    asincrono espera la respuesta del componente modal
    al recibirla se vincula con la vista de detalle */
    const modal= await this.modalCtrl.create({
    component:DetalleComponent,
    componentProps:{id}
    });
    //Se visualisa el componente de detalle
    modal.present();
    }

  ngOnInit() {
    this.servicioPersonajes.getDatos().subscribe((resp: RespuestaBD)=>{console.log('Personajes', resp)
      this.personajesRecientes=resp.data;
})
  }

}
