import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUnavailableComponent } from './main-unavailable.component';

const routes: Routes = [{ path: '', component: MainUnavailableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainUnavailableRoutingModule { }
