import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { LogInComponent } from './log-in/log-in.component';
import { OperateComponent } from './operate/operate.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [ { path:'register' , component : UploadComponent  }
,{path:'log-in',component:LogInComponent}, {path:"trade", component: PriceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
