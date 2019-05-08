import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-time',
  templateUrl: './data-time.page.html',
  styleUrls: ['./data-time.page.scss'],
})
export class DataTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [
        {
          text:"Guardar",
          handler:(evento) => {
            console.log('Click en guardar!');
            console.log(evento);
          }
        },
        {
          text:"log",
          handler:() => {
            console.log('Click en log.');
            return false;
          }
        }
      ]
    };
  }

  cambioFecha( event ){
    console.log(event);
    console.log('Date', new Date ( event.detail.value ));
  }

}
