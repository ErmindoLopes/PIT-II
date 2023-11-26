import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNotFoundComponent } from './main-not-found.component';

const routes: Routes = [{ path: '', component: MainNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNotFoundRoutingModule { }
