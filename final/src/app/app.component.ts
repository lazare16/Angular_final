import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My Angular App';

  constructor(private authService: AuthService, private router: Router) {}

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // Check if the current user is an admin
  isAdmin(): boolean {
    return this.authService.getRole() === 'admin';
  }

  // Log the user out and redirect to login page
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
