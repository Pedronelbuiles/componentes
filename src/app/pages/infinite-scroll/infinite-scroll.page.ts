import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  // de esta forma se obtiene un objeto del html para poder usarlo en el módulo de typescript
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll; 

  data = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log("Cargando elementos...");
    setTimeout(() => {
      if(this.data.length > 50){
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const newArray = Array(20);
      this.data.push(...newArray);
      event.target.complete();
    }, 1000);
  }

}
