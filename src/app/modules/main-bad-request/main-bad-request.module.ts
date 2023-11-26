import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainBadRequestRoutingModule } from './main-bad-request-routing.module';
import { MainBadRequestComponent } from './main-bad-request.component';



@NgModule({
  declarations: [
    MainBadRequestComponent
  ],
  imports: [
    CommonModule,
    MainBadRequestRoutingModule,
  ]
})
export class MainBadRequestModule { }
