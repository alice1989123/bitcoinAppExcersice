import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm!: FormGroup;  
  SERVER_URL = "http://localhost:3000/";


  constructor(private fb: FormBuilder , private http :HttpClient , private router:Router) { }

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
login( ){
  this.router.navigate(['/log-in'])
 
}

  get user( ){
    return this.uploadForm.get('User')   
  }
  submit(){
    const user = this.uploadForm.get("User");

    console.log(this.uploadForm.value)
    const price =  this.http.post('http://localhost:3000/register', this.uploadForm.value ,   {responseType: 'text'})
    .subscribe({
      next: (response) => {console.log(response) ;window.alert(" New account succesfully created"); this.router.navigate(['./log-in'])},
      error: (error) => { if(error.status === 400){window.alert(error.error)} console.log(error)},
    });
    console.log(price)
  }

   

}
