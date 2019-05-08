import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo:string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
    this.titulo= "alert page";
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah)=>{
            console.log('Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (blah)=>{
            console.log('Botón ok');
          }
        }
      ]
    });

    await alert.present();
  }

  //prompt
  async presentAlertPrompt() {
    const input = await this.alertCtrl.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Ingresar nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log("Cancelado");
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.titulo = data.name1;
            console.log(this.titulo);
          }
        }
      ]
    });

    await input.present();
  }

}
