import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { MaterialModule } from '@shared/components/angular-material/material.module';
import { SharedModule } from '@shared/shared.module';
import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { AuthLoginComponent } from './auth-login.component';
import { LoginType1Component } from './components/login-type1/login-type1.component';




@NgModule({
  declarations: [
    AuthLoginComponent,
    LoginType1Component,
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
