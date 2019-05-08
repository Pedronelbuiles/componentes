import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPopover( evento ){
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode:'ios',
      backdropDismiss:false
    });

    await popover.present();

    //Método onDidDismiss() se ejecuta una vez el popover o modal se cierra por completo
    // const { data } = await popover.onDidDismiss();

    
    //Método onWillDismiss() se ejecuta antes de que se cierre el popoover o modal
    const { data } = await popover.onWillDismiss();
    console.log("Info que obtiene el padre: ", data);
  }
}
