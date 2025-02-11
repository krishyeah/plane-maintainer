import { Component, OnInit } from '@angular/core';
import { PlaneService } from '../../services/plane.service';

@Component({
  selector: 'app-plane-list',
  standalone: true,
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css']
})
export class PlaneListComponent implements OnInit {
    planes: any[] = [];

    constructor(private planeService: PlaneService) {}

    async ngOnInit() {
        this.planes = await this.planeService.getPlanes();
    }
}
