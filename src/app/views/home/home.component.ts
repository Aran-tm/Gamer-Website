import { Router } from '@angular/router';
import { Component, inject, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  router = inject(Router);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    
    if (isPlatformBrowser(this.platformId)) {
      this.showAlert();
    }
  }

  redirectToHome(): void {
    this.router.navigateByUrl('/');
  }

  async showAlert(): Promise<void> {
    // Dynamic import to avoid SSR issues
    const Swal = await import('sweetalert2');

    Swal.default.fire({
      position: 'top-end',
      icon: 'success',
      title: 'User authenticated successfully.',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
