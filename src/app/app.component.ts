import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PIT-II-Front';

  /**
   *
   */
  constructor(
    private sessionStorage: SessionStorageService,
  ) {

    this.init();

  }


  init(){


    // create agentId
    /* ********************************************************************** */
    // verifica se já existe agentId e token. Se não existir cria, caso contrario não.
    if (!this.sessionStorage.retrieve('agentId') && !this.sessionStorage.retrieve('userToken')){
      const agentId = uuid();
      this.sessionStorage.store('agentId', agentId);
    }
    /* ********************************************************************** */


  }
}
