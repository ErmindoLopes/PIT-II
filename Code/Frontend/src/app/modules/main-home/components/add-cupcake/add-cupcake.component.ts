import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-cupcake',
  templateUrl: './add-cupcake.component.html',
  styleUrls: ['./add-cupcake.component.scss']
})
export class AddCupcakeComponent {

  title: string = 'Novo Cupcake';

  mainForm: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    qtde: [10, Validators.required],
    valor: [11, Validators.required],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {},
    private dialogRef: MatDialogRef<AddCupcakeComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) {

  }


  openSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 5000,
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  ok(): void {

    if (!this.mainForm.valid) {
      this.openSnackBar('Preencha todos os campos');
      return;
    }

    this.dialogRef.close({ ...this.mainForm.value });

  }

}
