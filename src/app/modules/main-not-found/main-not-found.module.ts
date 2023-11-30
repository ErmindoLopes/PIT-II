import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainNotFoundRoutingModule } from './main-not-found-routing.module';
import { MainNotFoundComponent } from './main-not-found.component';



@NgModule({
  declarations: [
    MainNotFoundComponent
  ],
  imports: [
    CommonModule,
    MainNotFoundRoutingModule,
  ]
})
export class MainNotFoundModule { }
