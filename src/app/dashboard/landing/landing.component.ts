import { Component } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'students-details-landing',
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
