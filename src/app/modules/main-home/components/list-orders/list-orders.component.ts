import { Component, OnInit } from '@angular/core';
import { MainService } from '@core/services/main.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {


  objetos: any[] = [];

  constructor(
    private mainService: MainService,
  ) {

    this.startLoad();
  }

  ngOnInit(): void {

  }

  startLoad() {

    this.objetos = [];
    this.mainService
      .getOrderList()
      .then((ret) => {
        this.objetos = ret;
      })
      .catch((rej) => {
        console.log(rej);
      });

  }

  totalPed(item:any){
    let ret:number;

    ret = item.items.reduce((accumulator:number, currentValue:any) => accumulator + (currentValue.qtde * currentValue.valor), 0);

    return ret.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }


}
