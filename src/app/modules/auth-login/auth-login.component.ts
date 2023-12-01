import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import Consts from '@shared/classes/global-consts';
import { Observable, Subject, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  isLoaded$: Observable<boolean>;
  actualTenant: any;
  actualEula: any[] = [];
  agentId: string = "";
  loginType: Number = 0;
  isLogging: boolean = false;
  isLoaded: boolean = false;





  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) {


    //primeiro de tudo desloga
    this.logOut();

    this.isLoaded$ = of(false);

    this.isLoaded$
      .pipe(takeUntil(this.destroy$))
      .subscribe(v => {
        if (v) {

          this.loginType = 1;

          setTimeout(() => {
            this.isLoaded = true;
            this.loadDom();
          }, 10);

        }

      });

    this.authService.isLoggedIn$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(v => this.loginDone(v));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {

    this.agentId = this.authService.getAgentId();
    this.isLoaded = true;
    this.isLoaded$ = of(true);

  }


  loadDom() {

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: Consts.SNACKBAR_DURATION,
    });
  }

  logOut(): void {
    this.authService.logout();
  }

  emailLogin(loginData: any) {

    if (!this.isLoaded) return;

    let { email, password } = loginData;
    email = email.toLowerCase();

    this.isLogging = true;

    this.authService.login(email, password)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        error: (err: HttpErrorResponse) => {
          this.isLogging = false;
          let msg = "messages.503";
          if (err.status === 0)
            msg = "messages.503";
          else if (err.error.message)
            msg = err.error.message;

          this.openSnackBar(msg);
        }
      });


  }



  loginDone(loginOk: boolean) {
    if (loginOk === true) {
      this.isLogging = false;
      this.router.navigate(['/home']);
    }
  }

}


