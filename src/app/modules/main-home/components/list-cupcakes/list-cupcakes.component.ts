import { Component, OnInit } from '@angular/core';
import { MainService } from '@core/services/main.service';

@Component({
  selector: 'app-list-cupcakes',
  templateUrl: './list-cupcakes.component.html',
  styleUrls: ['./list-cupcakes.component.scss']
})
export class ListCupcakesComponent implements OnInit {


  objetos: any[] = [];

  constructor(
    private mainService: MainService
  ) {

    this.startLoad();
  }

  ngOnInit(): void {

  }

  startLoad() {

    this.objetos = [];
    this.mainService
      .getCupcakeList()
      .then((ret) => {
        this.objetos = ret;
      })
      .catch((rej) => {
        console.log(rej);
      });

  }


}
