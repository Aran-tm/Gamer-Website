import { HeaderComponent } from './header/header.component';
import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { LeftCardComponent } from "./left-card/left-card.component";
import { CenterCardComponent } from "./center-card/center-card.component";
import { RightCardComponent } from "./right-card/right-card.component";
import { TrendingCategoriesComponent } from "./trending-categories/trending-categories.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, LeftCardComponent, CenterCardComponent, RightCardComponent, TrendingCategoriesComponent],
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
