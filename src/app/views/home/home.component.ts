import { HeaderComponent } from './header/header.component';
import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  router = inject(Router);

  constructor() {}

  ngOnInit(): void {}

  redirectToHome(): void {
    this.router.navigateByUrl('/');
  }
}
