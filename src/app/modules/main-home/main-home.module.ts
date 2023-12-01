import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { MaterialModule } from '@shared/components/angular-material/material.module';
import { SharedModule } from '@shared/shared.module';
import { MainHomeRoutingModule } from './main-home-routing.module';
import { MainHomeComponent } from './main-home.component';
import { ListCupcakesComponent } from './components/list-cupcakes/list-cupcakes.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';



@NgModule({
  declarations: [
    MainHomeComponent,
    ListCupcakesComponent,
    ListOrdersComponent
  ],
  imports: [
    CommonModule,
    MainHomeRoutingModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MainHomeModule { }
