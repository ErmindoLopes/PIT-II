import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "@core/services/auth.service";
import { Observable, catchError, combineLatest, filter, map, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CanActivateRouteGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  // canActivate(): Observable<boolean> {
  //     return this.authService.isLoggedIn$();
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    // return this.authService.isLoggedIn$().pipe(
    //   map(e => {
    //     if (e) {
    //       return true;
    //     } else {
    //       this.router.navigate(['/login']);
    //       return false;
    //     }
    //   }),
    //   catchError((err) => {
    //     this.router.navigate(['/login']);
    //     return of(false);
    //   })
    // )

    return combineLatest([
      this.authService.isLoaded$().pipe( filter(val => val === true) ),
      this.authService.isLoggedIn$()
    ])
    .pipe(
      map((values) => {
                
        if (values[1]) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }

      }),
      catchError((err) => {
        console.log(err);
        
        this.router.navigate(['/login']);
        return of(false);
      })
    );



  }
}
