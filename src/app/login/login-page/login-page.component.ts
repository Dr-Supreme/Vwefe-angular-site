import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  isLoginMode = true; // toggle between login / create account

  constructor(private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: any) {
    // In real app, connect to backend here
    console.log(this.isLoginMode ? 'Logging in...' : 'Creating account...', form.value);
    this.router.navigate(['/home']); // navigate to home after "login"
  }

  skip() {
    this.router.navigate(['/home']);
  }
}
