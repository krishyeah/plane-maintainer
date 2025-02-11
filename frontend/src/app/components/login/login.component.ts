import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username = '';
    password = '';
    errorMessage = '';

    constructor(private authService: AuthService, private router: Router) {}

    async login() {
        try {
            await this.authService.login(this.username, this.password);
            this.router.navigate(['/dashboard']);
        } catch (error) {
            this.errorMessage = 'Invalid username or password';
        }
    }
}
