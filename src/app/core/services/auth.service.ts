import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environment/environment";
import jwt_decode from 'jwt-decode';
import { LocalStorageService, SessionStorageService } from "ngx-webstorage";
import { BehaviorSubject, Observable, tap } from "rxjs";

const gateway = environment.config.apiUrl;


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoaded$$: BehaviorSubject<boolean>;

  private loggedIn$$: BehaviorSubject<boolean>;
  private loggedIn$$$: BehaviorSubject<boolean>;


  constructor(
    private http: HttpClient,
    private sessionStorage: SessionStorageService,
    private localStorage: LocalStorageService,
  ) {
    this.isLoaded$$ = new BehaviorSubject(false);

    this.loggedIn$$ = new BehaviorSubject(this.isLoggedIn());
    this.loggedIn$$$ = new BehaviorSubject(false); // intermediario para tratar afterLoginSync e afterLoginAsync

    this.loggedIn$$
      .subscribe(async (r) => {
        if (r) {
          this.afterLoginAsync();
          await this.afterLoginSync();
          this.loggedIn$$$.next(true);
        }
        this.isLoaded$$.next(true);
      });

  }

  isLoaded$(): Observable<boolean> {
    return this.isLoaded$$.asObservable();
  }

  isLoggedIn$(): Observable<boolean> {
    //return this.loggedIn$$.asObservable();
    return this.loggedIn$$$.asObservable();
  }


  getAgentId(): string {
    return this.sessionStorage.retrieve('agentId');
  }




  getUserId(): string {
    return this.sessionStorage.retrieve('userId') ?? '';
  }

  logout(): void {
    this.deleteToken();
    this.loggedIn$$.next(false);
    this.loggedIn$$$.next(false);
  }

  login(email: string, password: string): Observable<any> {

    const url = `${gateway}/auth/login`;
    return this.http.post(
      url,
      { email, password }
    )
      .pipe(
        //delay(5000),
        tap(async (response) => {
          this.saveToken(response); //salva o toke primeiro para usar nas req subsequentes
          this.loggedIn$$.next(true);
        }),

      );
  }


  // privates
  /* ********************************************************************* */
  private isLoggedIn() {
    if (this.hasSavedToken()) {
      const token = this.getUserToken();
      const decoded: any = jwt_decode(token);
      const expiryMilis = Number(decoded.exp) * 1000;
      const nowMilis = new Date().getTime();

      const storedAgentId = this.getAgentId();
      const tokenAgentId = decoded[environment.jwt.aud].agent_id;

      const tokenOk = (nowMilis <= expiryMilis) && (storedAgentId == tokenAgentId);

      return tokenOk;

    }
    return false;
  }

  private hasSavedToken(): boolean {
    return Boolean(this.sessionStorage.retrieve('userToken'));
  }

  private getUserToken(): string {
    return this.sessionStorage.retrieve('userToken') ?? '';
  }

  //rotinas que rodam em paralelo depois do login
  private async afterLoginAsync() {
  }

  //rotinas que rodam em serie depois do login
  private async afterLoginSync() {

  }


  private deleteToken(): void {
    this.sessionStorage.clear('userToken');
    this.sessionStorage.clear('userId');
  }

  private saveToken(loginResponse: any): void {

    const decoded: any = jwt_decode(loginResponse.token || '');
    const userId = decoded[environment.jwt.aud].user_id;

    this.sessionStorage.store('userToken', loginResponse.token);
    this.sessionStorage.store('userId', userId);

  }
  /* ********************************************************************* */



}

