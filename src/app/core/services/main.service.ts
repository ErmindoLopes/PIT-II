import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "@environment/environment";
import { SessionStorageService } from "ngx-webstorage";
import { lastValueFrom } from "rxjs";


const gateway = environment.config.apiUrl;


@Injectable({
  providedIn: 'root',
})
export class MainService{


  constructor(
    private http: HttpClient,
    private router: Router,
    private sessionStorage: SessionStorageService,
  ) {}


  logout(){
    this.sessionStorage.clear();
    this.router.navigate(['/login']);
  }


  async getCupcakeList(): Promise<any> {

    const auth = { 'authorization': `bearer `+ this.sessionStorage.retrieve('userToken') };

    let lista: any[] = [];
    const url = `${gateway}/cupcakes/list`;
    lista = await lastValueFrom(this.http.get(url, { headers: { ...auth } }))
      .then(async (resp: any) => {
        return resp;
      })
      .catch((err) => {
        console.log(err);
      });

    return lista;

  }


}
