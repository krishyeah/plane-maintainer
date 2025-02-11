import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8000/api/';

    async login(username: string, password: string) {
        try {
            const response = await axios.post(`${this.apiUrl}/login/`, { username, password });
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('role', response.data.role);
            return response.data;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    }

    async signup(username: string, email: string, password: string, role: string) {
        return await axios.post(`${this.apiUrl}/signup/`, { username, email, password, role });
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('role');
    }

    getRole(): string | null {
        return localStorage.getItem('role');
    }
}
