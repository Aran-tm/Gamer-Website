import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = true;
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode = savedTheme === 'dark';
    }
    this.applyTheme();
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
  }

  private applyTheme(): void {
    const htmlElement = this.document.documentElement;

    if (this.darkMode) {
      this.renderer.setStyle(htmlElement, 'background', '#1A2028');
      this.renderer.setStyle(htmlElement, 'padding', '20px');
      this.renderer.addClass(htmlElement, 'dark-theme');
      this.renderer.removeClass(htmlElement, 'light-theme');
    } else {
      this.renderer.setStyle(htmlElement, 'background', '#f0f2f4');
      this.renderer.setStyle(htmlElement, 'padding', '20px');
      this.renderer.addClass(htmlElement, 'light-theme');
      this.renderer.removeClass(htmlElement, 'dark-theme');
    }
  }
}
