import { Routes } from '@angular/router';
import { AcessoComponent } from './app/acesso/acesso.component';
import { HomeComponent } from './app/home/home.component';

export const ROUTES: Routes = [
  { path: '', component: AcessoComponent },
  { path: 'home', component: HomeComponent },
];
