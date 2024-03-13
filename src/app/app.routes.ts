import { Routes } from '@angular/router';
import { authGuardGuard } from './auth/auth-guard.guard';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
      canMatch: [authGuardGuard]
  }
  // {
  //   path: 'landing',
  //   component: LandingComponent,
  //   canMatch: [authGuardGuard]
  // },
  // {
  //   path: 'students',
  //   component: StudentRecordsComponent,
  //   canMatch: [authGuardGuard]
  // }
];