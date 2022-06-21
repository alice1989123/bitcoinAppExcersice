import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

 
  uploadForm!: FormGroup;  
  SERVER_URL = "http://localhost:3000/";


  constructor(private fb: FormBuilder , private http :HttpClient , private router: Router) { }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      User: '',
      Password: ''

  })
  this.uploadForm.valueChanges.subscribe(console.log)

}
getPrice() {
  
  return this.http.get(this.SERVER_URL);

}


  get user( ){
    return this.uploadForm.get('User')
   
  }

  register( ){
    this.router.navigate(['/register'])
   
  }
  submit(){
    const user = this.uploadForm.get("User");

    console.log(this.uploadForm.value)
    const price =  this.http.post('http://localhost:3000/log_in', this.uploadForm.value ,   {responseType: 'text',  withCredentials: true})
    .subscribe({
      next: (response) => {console.log(response);this.router.navigate(['/trade'])},
      error: (error) => {  
        if(error.status ===403)
        window.alert("Wrong Authentification" ) ;console.log(error)},
    });
    console.log(price)
  }

    
}


