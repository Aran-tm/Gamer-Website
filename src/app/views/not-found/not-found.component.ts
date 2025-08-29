import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  router = inject(Router);

  constructor() {}

  redirectToHome(): void {
    this.router.navigateByUrl('/');
  }
}
