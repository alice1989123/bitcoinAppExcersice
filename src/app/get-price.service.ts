import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';


import { WebsocketService } from './websocket.service';

const WsUrl = 'wss://stream.binance.com:9443/ws/btcusdt@trade'

export interface BTCData  {"e":"trade","E":number,"s":"BTCUSDT","t":number,"p":string,"q":number,"b":number,"a":number,"T":number,"m":boolean,"M":boolean}

@Injectable({
  providedIn: 'root'
})


export class GetPriceService {
  public messages: Observable< any>;


  private url = "http://localhost:3000/fetch_price";



  constructor(private http: HttpClient ,  wsService: WebsocketService ) { 
     this.messages = wsService.connect(WsUrl).pipe(  map(
      
      (response: MessageEvent): any => {
        let data = JSON.parse(response.data);
        return  (data);
      }

     ))}

  getPrice() {
    return this.http.get(this.url);
  }

  getPriceLive(){
    return this.messages
  }

    //
  
}
