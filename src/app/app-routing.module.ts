import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateRouteGuard } from '@core/guards/can-activate-route.guard';


const routes: Routes = [

  // Rotas Liberadas
  /* ************************************************************************************************************************* */
  {
    path: 'login',
    loadChildren: () => import('./modules/auth-login/auth-login.module').then((m) => m.AuthLoginModule),
  },
  /* ************************************************************************************************************************* */




  // Rotas Protegidas
  /* ************************************************************************************************************************* */


  // Main
  //-----------------------------------------------------------------------------------
  {
    path: '',
    canActivate: [CanActivateRouteGuard],
    pathMatch: 'full',
    loadChildren: () => import('./modules/main-home/main-home.module').then((m) => m.MainHomeModule),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  //-----------------------------------------------------------------------------------


  /* ************************************************************************************************************************* */


  // Qualquer Outra Rota
  /* ************************************************************************************************************************* */
  {
    path: '503',
    loadChildren: () => import('./modules/main-unavailable/main-unavailable.module').then((m) => m.MainUnavailableModule),
    pathMatch: 'full',
  },
  {
    path: '400',
    loadChildren: () => import('./modules/main-bad-request/main-bad-request.module').then((m) => m.MainBadRequestModule),
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => import('./modules/main-not-found/main-not-found.module').then((m) => m.MainNotFoundModule),
  },
  /* ************************************************************************************************************************* */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false, //hide fragment
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule],
  providers:[

  ]
})
export class AppRoutingModule { }
