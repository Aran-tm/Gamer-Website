import { Component, inject, signal } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpened = signal<boolean>(false);
  router = inject(Router);

  openMenu(): void {
    this.isMenuOpened.set(!this.isMenuOpened());
  }

  goToLogin(): void {
    this.router.navigateByUrl('/');
  }
}
