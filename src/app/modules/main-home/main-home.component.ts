import { Component } from '@angular/core';
import { MainService } from '@core/services/main.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent {

  activeWindow: string = 'orders';

  /**
   *
   */
  constructor(
    private mainService: MainService
  ) {}

  changeWindow(window:string) {

    this.activeWindow = window;

  }

  logout(){
    this.mainService.logout();
  }

}
