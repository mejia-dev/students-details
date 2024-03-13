import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'students-details-landing',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, NgbHighlight],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
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

  constructor(
    private fb: FormBuilder
  ) {
    this.filter = this.fb.control("", { nonNullable: true })
  }
}
