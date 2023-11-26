import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainUnavailableRoutingModule } from './main-unavailable-routing.module';
import { MainUnavailableComponent } from './main-unavailable.component';



@NgModule({
  declarations: [
    MainUnavailableComponent
  ],
  imports: [
    CommonModule,
    MainUnavailableRoutingModule,
  ]
})
export class MainUnavailableModule { }
