
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Trade } from './trade';

@Component({
  selector: 'app-operate',
  templateUrl: './operate.component.html',
  styleUrls: ['./operate.component.css']
})

export class OperateComponent implements OnInit {


  trades:any

  BuyForm!: FormGroup;  
  SellForm!: FormGroup;  
  balance:any;
 
  applyStyles: any


  SERVER_URL = "http://localhost:3000/";


  constructor(private fb: FormBuilder , private http :HttpClient) { }

  ngOnInit() {
    this.http.get(this.SERVER_URL+'funds',  {responseType: 'text' ,  withCredentials: true } ).subscribe(data => {
      this.balance = JSON.parse(data);
      

      

      
  })
    this.BuyForm = this.fb.group({
      qty: '',

  })
  this.SellForm = this.fb.group({
    qty: '',

})

/* this.http.get(this.SERVER_URL+'trades',  {responseType: 'text' ,  withCredentials: true } ).subscribe(data => {
  console.log('hey')
  console.log(data)

  this.trade = data.price;
  

  

  
})
 */

 this.http.get(this.SERVER_URL+'trades',  {responseType: 'text' ,  withCredentials: true } ).subscribe(data => {
  const response = JSON.parse(data)  
  this.trades = response;
  console.log(response)
  //this.prices= response.map(x:any  => x.price)
  

  

  
}) 




//this.balance = this.http.get("http://localhost:3000/")



}



 
  submitBuy(){
    const user = this.BuyForm.get("User");
    this.BuyForm.value.side = "buy"
    const result =  this.http.post('http://localhost:3000/operation', this.BuyForm.value ,   {responseType: 'text' ,  withCredentials: true })
    .subscribe({
      next: (response) => {console.log(response);     this.ngOnInit();
      },
      error: (error) => {console.log(error) ; window.alert(error.error)},
    });
    console.log(result)
  }
  submitSell(){
    const user = this.SellForm.get("User");
    this.SellForm.value.side = "sell"
    const result =  this.http.post('http://localhost:3000/operation', this.SellForm.value ,   {responseType: 'text' , withCredentials: true })
    .subscribe({
      next: (response) => {console.log(response);     this.ngOnInit();
      },
      error: (error) => console.log(error),
    });
    console.log(result)
  }


}

