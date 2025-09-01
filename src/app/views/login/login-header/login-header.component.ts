import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '@core/services/theme-toggle.service';

@Component({
  selector: 'app-login-header',
  imports: [],
  templateUrl: './login-header.component.html',
  styleUrl: './login-header.component.scss',
})
export class LoginHeaderComponent implements OnInit {
  themeService = inject(ThemeService);

  ngOnInit() {
    
  }
}
