import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const token = this.authService.login(this.username, this.password);
    if (token) {
      this.router.navigate(['/home']); // Redirect to home page
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
