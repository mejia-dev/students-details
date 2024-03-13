import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { LandingComponent } from './landing/landing.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRecordsComponent } from './student-records/student-records.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
      {
        path: "students",
        component: StudentRecordsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    LandingComponent,
    SideBarComponent,
    StudentRecordsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbHighlight,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      routes
    )
  ]
})
export class DashboardModule { }
