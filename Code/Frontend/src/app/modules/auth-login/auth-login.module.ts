import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { MaterialModule } from '@shared/components/angular-material/material.module';
import { SharedModule } from '@shared/shared.module';
import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { AuthLoginComponent } from './auth-login.component';




@NgModule({
  declarations: [
    AuthLoginComponent,
  ],
  imports: [
    CommonModule,
    AuthLoginRoutingModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthLoginModule { }
