import { Component, inject } from '@angular/core';
import { ThemeService } from '@core/services/theme-toggle.service';

@Component({
  selector: 'app-login-buttons',
  imports: [],
  templateUrl: './login-buttons.component.html',
  styleUrl: './login-buttons.component.scss',
})
export class LoginButtonsComponent {
  themeService = inject(ThemeService);
}
