import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { GetPriceService } from '../get-price.service';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
 /*  styleUrls: ['./price.component.css'] */
})
export class PriceComponent implements OnInit {
  
  price:any

  constructor(private getPriceService: GetPriceService) { 

  }

  ngOnInit() {
    this.getPriceService.getPrice().subscribe(
      (response) => { this.price = response;
      console.log(this.price) },
      (error) => { console.log(error); });
  }

}
