import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { LandingComponent } from "./landing/landing.component";
import { StudentRecordsComponent } from "./student-records/student-records.component";

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: '',
    component: StudentRecordsComponent
  }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
