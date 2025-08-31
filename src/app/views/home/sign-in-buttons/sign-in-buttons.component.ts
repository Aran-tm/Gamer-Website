import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-buttons',
  imports: [],
  templateUrl: './sign-in-buttons.component.html',
  styleUrl: './sign-in-buttons.component.scss',
})
export class SignInButtonsComponent implements OnInit {
  router = inject(Router);

  constructor() {}

  ngOnInit(): void {}

  goToLogin(): void {
    this.router.navigateByUrl('/');
  }
}
