import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './side-bar/side-bar.component';

import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'students-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, NgbHighlight, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'students-details';
  filter: FormControl;
  students: Array<any> = [
    {
      "name": "Jimmy Johnson",
      "city": "Johnsonville",
      "studentImage": "",
      "state": "VT",
      "country": "Countrylandia",
      "physics": 11,
      "chemistry": 22,
      "math": 33,
      "computer": 44,
    },
    {
      "name": "Some Rando",
      "city": "Johnsonville",
      "studentImage": "",
      "state": "VT",
      "country": "Countrylandia",
      "physics": 55,
      "chemistry": 66,
      "math": 77,
      "computer": 88,
    }
  ];
  sidebarExpanded: boolean = true;
  constructor(
    private fb: FormBuilder
  ) {
    this.filter = this.fb.control("", { nonNullable: true })
  }
}
