import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Consts from '@shared/classes/global-consts';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login-type1',
  templateUrl: './login-type1.component.html',
  styleUrls: ['./login-type1.component.scss']
})
export class LoginType1Component {

  @ViewChild('logregbox') logregBox!: ElementRef<HTMLDivElement>;
  @Input() isLogging!: boolean;
  @Output() onEmailLogin: EventEmitter<any> = new EventEmitter();
  @Output() onEmailRegister: EventEmitter<any> = new EventEmitter();

  registerForm: FormGroup = this.fb.group({
    'full_name': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', Validators.minLength(6)],
    'accept_terms': [false, [Validators.requiredTrue]],
  });

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', Validators.minLength(6)],
  });

  actualTenant: any;
  need_terms:boolean = true;

  constructor(
    private fb: FormBuilder,
    private sessionStorage: SessionStorageService,
    private snackBar: MatSnackBar,
    private router:Router
  ) {


  }

  setLang(lang: string){
    this.sessionStorage.store('agentLang', lang);
  }

  register_link(){
    this.logregBox.nativeElement.classList.add('active');
  }

  login_link(){
    this.logregBox.nativeElement.classList.remove('active');
  }

  liberaTerms(){
    this.need_terms = false;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: Consts.SNACKBAR_DURATION,
    });
  }

  emailLoginClick() {

    if (!this.loginForm.valid) {
      this.openSnackBar("Preencha todos os campos");
      return;
    }

    this.onEmailLogin.emit(this.loginForm.value);
  }

  emailRegisterClick() {



    this.onEmailRegister.emit(this.registerForm.value);
  }



}
