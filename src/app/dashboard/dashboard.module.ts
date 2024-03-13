import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "/dashboard/landing",
        pathMatch: "full"
      },
      {
        path: "landing",
        component: LandingComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    LandingComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbHighlight,
    RouterModule.forChild(
      routes
    )
  ]
})
export class DashboardModule { }
