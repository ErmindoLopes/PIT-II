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

  async delCupcake(item:any): Promise<any> {

    const auth = { 'authorization': `bearer `+ this.sessionStorage.retrieve('userToken') };

    let ret: any;
    const url = `${gateway}/cupcakes/${item.id}`;
    ret = await lastValueFrom(this.http.delete(url, { headers: { ...auth } }))
      .then(async (resp: any) => {
        return resp;
      })
      .catch((err) => {
        console.log(err);
        return new Error('Esse produto não pode ser excluído pois já foi utilizado em um pedido.');
      });

    return ret;

  }

  async addCupcake(item:any): Promise<any> {

    const auth = { 'authorization': `bearer `+ this.sessionStorage.retrieve('userToken') };

    let ret: any;
    const data = item;
    const url = `${gateway}/cupcakes`;
    ret = await lastValueFrom(this.http.post(url, data, { headers: { ...auth } }))
      .then(async (resp: any) => {
        return resp;
      })
      .catch((err) => {
        console.log(err);
      });

    return ret;

  }

  async getOrderList(): Promise<any> {

    const auth = { 'authorization': `bearer `+ this.sessionStorage.retrieve('userToken') };

    let lista: any[] = [];
    const url = `${gateway}/orders/list`;
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
