import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {
  
  ocultar = '';

  slides:{ img: string, titulo: string, desc: string}[]=[
    {
      img: '/assets/slides/cometa.svg',
      titulo: 'Cometa Destructor',
      desc: 'Un cometa destructor que da miedo y mata.'
    },
    {
      img: '/assets/slides/mascara-teatro.svg',
      titulo: 'Las dos caras de la mascara',
      desc: 'Usada en el teatro mas antiguo, son parte de la historia.'
    },
    {
      img: '/assets/slides/galeria.svg',
      titulo: 'Icono de galeria',
      desc: 'Icono muy popular en el mundo , usado para las galerias de las app.'
    },
    {
      img: '/assets/slides/mascara-dos-caras.svg',
      titulo: 'Hermosura',
      desc: 'Una mascara simple pero hermosa.'
    }
  ]

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick(){
    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');
  }

}
