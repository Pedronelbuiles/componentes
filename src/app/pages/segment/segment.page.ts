import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;
  heores: Observable<any>;
  publisher: string = '';

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.heores = this.dataservice.getHeroes();
    this.segment.value = 'Todos'; 
  }

  segmentChanged(event){
    const valorSegmento :string = event.detail.value;
    if(valorSegmento === 'Todos'){
      this.publisher = '';
      return;
    }
    this.publisher = valorSegmento;
    console.log(this.publisher);
  }

}
