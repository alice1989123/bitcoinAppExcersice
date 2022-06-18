import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm!: FormGroup;  
  SERVER_URL = "http://localhost:3000/";


  constructor(private fb: FormBuilder , private http :HttpClient) { }

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
  submit(){
    const user = this.uploadForm.get("User");

    console.log(this.uploadForm.value)
    const price =  this.http.post('http://localhost:3000/register_user', this.uploadForm.value ,   {responseType: 'text'})
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
    console.log(price)
  }

    submitForm() {
    var formData: any = new FormData();
    formData.append('User', this.uploadForm.value.User);
    formData.append('Password',this.uploadForm.value.Password);
    console.log(formData)
    this.http
      .get('http://localhost:3000/api/', formData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }

}
