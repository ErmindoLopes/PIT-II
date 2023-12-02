import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from '@core/services/main.service';
import { map } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { AddCupcakeComponent } from '../add-cupcake/add-cupcake.component';

@Component({
  selector: 'app-list-cupcakes',
  templateUrl: './list-cupcakes.component.html',
  styleUrls: ['./list-cupcakes.component.scss']
})
export class ListCupcakesComponent implements OnInit {


  objetos: any[] = [];

  constructor(
    private mainService: MainService,
    private dialogModal: MatDialog,
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

  async del(item: any) {

    const isOk = await new Promise((resolve, reject) => {
      const options = {
        title: "Continuar ?",
        html: `Essa operação irá apagar o registro`,
        icon: 'question' as SweetAlertIcon,
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        customClass: {
          confirmButton: 'icon-btn hover-green btn-swal-confirm',
          cancelButton: 'icon-btn btn-swal-cancel',
        },
        buttonsStyling: false, // css custom
        reverseButtons: true, // ordem dos botoes
      };

      Swal
        .fire(options)
        .then((result) => {

          if (result.value) {
            resolve(true);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            resolve(false);
          }

        });

    });

    if (!isOk)
      return;

    this.mainService
      .delCupcake(item)
      .then((ret) => {
        this.startLoad();
      })
      .catch((rej) => {
        console.log(rej);
      });

  }


  async add() {


    let dialogRef: any;

    dialogRef = this.dialogModal.open(
      AddCupcakeComponent,
      {
        width: '80dvw',
        data: {},
        autoFocus: true,
        disableClose: true,
      }
    );

    const infoRet = await dialogRef
      .afterClosed()
      .pipe(
        map(x => (x) ? x : (x === '' ? '' : null))
      )
      .toPromise();

    if (!infoRet) return;

    this.mainService
      .addCupcake(infoRet)
      .then((ret) => {
        this.startLoad();
      })
      .catch((rej) => {
        console.log(rej);
      });
  }

}
