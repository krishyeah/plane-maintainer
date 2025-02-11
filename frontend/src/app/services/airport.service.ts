import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
    private apiUrl = 'http://localhost:8000/api/airport';

    async getAirports() {
        const response = await axios.get(this.apiUrl);
        return response.data;
    }
}
