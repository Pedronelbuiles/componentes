import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  progress= 0.05;

  constructor() { }

  ngOnInit() {
  }

  cambioRango( event ){
    this.progress = event.detail.value/100;
    console.log(this.progress);
  }

}
