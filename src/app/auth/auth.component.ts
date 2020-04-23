import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
//import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  constructor(private authService: AuthService) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    if (this.isLoginMode) {

    } else {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signUp(email, password).subscribe(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    }    
    form.reset();
  }

  ngOnInit() {
  }

}
