import { Component, OnInit } from '@angular/core';
import { AirportService } from '../../services/airport.service';

@Component({
  selector: 'app-airport-list',
  standalone: true,
  imports: [],
  templateUrl: './airport-list.component.html',
  styleUrl: './airport-list.component.css'
})
export class AirportListComponent implements OnInit {
    planes: any[] = [];

    constructor(private airportService: AirportService) {}

    async ngOnInit() {
        this.planes = await this.airportService.getAirports();
    }
}
