import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {
    private apiUrl = 'http://localhost:8000/api/planes';

    async getPlanes() {
        const response = await axios.get(this.apiUrl);
        return response.data;
    }
}
