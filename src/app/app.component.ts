import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';

import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'students-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbHighlight, SideBarComponent],
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
