import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService, AuthServiceResponse } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  errorMsg = false;
  showMsg = '';

  constructor(private authService: AuthService) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthServiceResponse>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.logIn(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(resp => {
      if (resp.status === 200) {
        this.errorMsg = false;
        this.showMsg = resp.msg;
        /* form.reset(); */
      } else {
        this.errorMsg = true;
        this.showMsg = resp.msg;
      }

      this.isLoading = false;
    }, errorMessage => {
      console.log(errorMessage);
      this.errorMsg = true;
      this.isLoading = false;
      this.showMsg = errorMessage;
    });

  }

  ngOnInit() {
  }

}
