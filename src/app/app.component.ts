import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'students-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AuthService]
})
export class AppComponent {
  title = 'students-details';
  sidebarExpanded: boolean = true;
  constructor(
  ) {
  }
}
