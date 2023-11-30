import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { MaterialModule } from './components/angular-material/material.module';
import { LoadingComponent } from './components/system/loading/loading.component';





@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule,
  ],
  declarations: [
    LoadingComponent,
  ],
  exports: [
    CommonModule,
    LoadingComponent,
  ],
})
export class SharedModule {


 }
