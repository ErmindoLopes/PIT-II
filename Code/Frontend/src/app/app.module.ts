import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { LuxonDateAdapter, MAT_LUXON_DATE_ADAPTER_OPTIONS, MAT_LUXON_DATE_FORMATS } from '@angular/material-luxon-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    RouterModule,
    AppRoutingModule,

    HttpClientModule,

    NgxWebstorageModule.forRoot({ prefix: 'PIT2', separator: '.', caseSensitive: true }),
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, // para mat-datepicker
    { provide: MAT_LUXON_DATE_ADAPTER_OPTIONS, useValue: { strict: true } }, // para mat-datepicker
    { provide: DateAdapter, useClass: LuxonDateAdapter, deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS] }, // para mat-datepicker
    { provide: MAT_DATE_FORMATS, useValue: MAT_LUXON_DATE_FORMATS }, // para mat-datepicker
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
