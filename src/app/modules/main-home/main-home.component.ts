import { Component } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent {

  activeWindow: string = 'orders';

  changeWindow(window:string) {

    this.activeWindow = window;

  }

}
