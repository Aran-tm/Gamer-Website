import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, input } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-sign-in-buttons',
  imports: [ThemeToggleComponent, CommonModule],
  templateUrl: './sign-in-buttons.component.html',
  styleUrl: './sign-in-buttons.component.scss',
})
export class SignInButtonsComponent implements OnInit {
  router = inject(Router);
  leftSide = input<boolean>(false);

  constructor() {}

  ngOnInit(): void {}

  goToLogin(): void {
    this.router.navigateByUrl('/');
  }
}
