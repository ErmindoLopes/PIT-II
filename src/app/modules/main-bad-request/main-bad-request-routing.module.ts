import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBadRequestComponent } from './main-bad-request.component';


const routes: Routes = [{ path: '', component: MainBadRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainBadRequestRoutingModule { }
