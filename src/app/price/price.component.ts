import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { GetPriceService } from '../get-price.service';


import * as Highcharts from 'highcharts';
import {
  webSocket
} from 'rxjs/webSocket';
import {
  of ,
  Subscription
} from 'rxjs';
import {
  concatMap,
  delay
} from 'rxjs/operators';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
 /*  styleUrls: ['./price.component.css'] */
})
export class PriceComponent implements OnInit {
  
  price:any

  constructor( private   http: HttpClient,
    ) { 

  }
  rate: any;
  rate$!: Subscription;
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [];
  chartOptions: any;
  subject = webSocket('wss://ws.coincap.io/prices?assets=bitcoin')
  ngOnInit() {
    this.rate = this.subject.pipe(
      concatMap(item => of (item).pipe(delay(1000)))
    ).subscribe(data => { // console.log(data)
      this.rate = data;
      this.chardata.push(Number(this.rate.bitcoin))
      this.chartOptions = {
        series: [{
          data: this.chardata,
        }, ],
        chart: {
          type: "line",
          zoomType: 'x'
        },
        title: {
          text: "BTC-Price",
        },
      };
    })
  }

}
