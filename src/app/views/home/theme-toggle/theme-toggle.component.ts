import { ThemeService } from '@core/services/theme-toggle.service';
import { CommonModule } from '@angular/common'
import { Component, OnInit, inject, input } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent implements OnInit {
  themeService = inject(ThemeService);
  hideThemeToggle = input<boolean>(false);

  constructor() {}

  ngOnInit(): void {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
