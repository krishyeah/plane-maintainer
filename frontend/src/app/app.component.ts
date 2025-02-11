import { Component } from '@angular/core';
import { PlaneListComponent } from './components/plane-list/plane-list.component';
import { AirportListComponent } from './components/airport-list/airport-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlaneListComponent, AirportListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Plane Maintainer';
}