import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  constructor() { }

  ngOnInit() {
    this.segment.value = 'Todos';
  }

  segmentChanged(event){
    const valorSegmento = event.detail.value;
    console.log(valorSegmento);
  }

}
