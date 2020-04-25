import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

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
    this.isLoading = true;
    if (this.isLoginMode) {

    } else {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signUp(email, password).subscribe(resp => {
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
  }

  ngOnInit() {
  }

}
