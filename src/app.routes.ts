import { Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { AcessoComponent } from './app/acesso/acesso.component';
import { HomeComponent } from './app/home/home.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);


export const ROUTES: Routes = [
  { path: '', component: AcessoComponent },
  { path: 'login', component: AcessoComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
];
