import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./views/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./views/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
