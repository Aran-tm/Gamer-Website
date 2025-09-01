import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '@core/services/theme-toggle.service';

@Component({
  selector: 'app-center-card',
  imports: [CommonModule],
  templateUrl: './center-card.component.html',
  styleUrl: './center-card.component.scss',
})
export class CenterCardComponent implements OnInit {
  themeService = inject(ThemeService);

  constructor() {}

  ngOnInit(): void {}
}
