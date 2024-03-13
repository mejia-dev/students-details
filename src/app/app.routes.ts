import { Routes } from '@angular/router';

import { LandingComponent } from "./landing/landing.component";
import { StudentRecordsComponent } from "./student-records/student-records.component";
import { authGuardGuard } from './auth/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    canMatch: [authGuardGuard]
  },
  {
    path: 'students',
    component: StudentRecordsComponent,
    canMatch: [authGuardGuard]
  }
];