import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';


@Component({
  selector: 'students-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'students-details';
  sidebarExpanded: boolean = true;
  constructor(
  ) {
  }
}
