import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetPriceService {

  private url = "http://localhost:3000/fetch_price";


  constructor(private http: HttpClient) { }
  getPrice() {
    return this.http.get(this.url);
  }
}
