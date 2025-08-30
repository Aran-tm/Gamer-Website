import { HaveAnAccountComponent } from './have-an-account/have-an-account.component';
import { LoginButtonsComponent } from './login-buttons/login-buttons.component';
import { ContinueWithComponent } from './continue-with/continue-with.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { EmailPasswordComponent } from "./email-password/email-password.component";

@Component({
  selector: 'app-login',
  imports: [
    LoginHeaderComponent,
    EmailPasswordComponent,
    ForgotPasswordComponent,
    ContinueWithComponent,
    LoginButtonsComponent,
    HaveAnAccountComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  router = inject(Router);

  constructor() {}

  redirectToLogin(): void {
    this.router.navigateByUrl('/');
  }
}
