import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router'
import { SignInButtonsComponent } from "../sign-in-buttons/sign-in-buttons.component";

@Component({
  selector: 'app-left-card',
  imports: [SignInButtonsComponent],
  templateUrl: './left-card.component.html',
  styleUrl: './left-card.component.scss',
})
export class LeftCardComponent implements OnInit {
  router = inject(Router);
  leftSide = signal<boolean>(false);

  constructor() {}

  ngOnInit(): void {}

  goToLogin(): void {
    this.router.navigateByUrl('/');
  }
}
