import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'students-details',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'students-details';
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
    }
  ]
}
