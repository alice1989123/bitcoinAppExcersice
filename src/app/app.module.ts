import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceComponent } from './price/price.component';
import { UploadComponent } from './upload/upload.component';
import {  MatFormFieldModule} from "@angular/material/form-field"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  HighchartsChartModule
} from 'highcharts-angular';
import { LogInComponent } from './log-in/log-in.component';
import { OperateComponent } from './operate/operate.component';
import{MatGridListModule} from '@angular/material/grid-list'; 

@NgModule({
  declarations: [
    AppComponent,
    
    PriceComponent,
    UploadComponent,
    LogInComponent,
    OperateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HighchartsChartModule,
    MatGridListModule,
    MDBBootstrapModule.forRoot()

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
