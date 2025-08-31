import { IMenuOptions } from '@core/interfaces/menu-options.interface';
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
  menuOptions: IMenuOptions[] = [
    {
      id: 1,
      name: 'Home',
      image: '/assets/images/home.png'
    },
    {
      id: 2,
      name: 'Streams',
      image: '/assets/images/stream.png'
    },
    {
      id: 3,
      name: 'Party',
      image: '/assets/images/party.png'
    },
    {
      id: 4,
      name: 'Premium',
      image: '/assets/images/premium.png'
    },
  ]

  openMenu(): void {
    this.isMenuOpened.set(!this.isMenuOpened());
  }

  goToLogin(): void {
    this.router.navigateByUrl('/');
  }
}
