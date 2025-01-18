import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' },
  ];

  constructor() {}

  // Simulate login
  login(username: string, password: string): string | null {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Simulate a JWT token with role info
      const token = btoa(JSON.stringify({ username: user.username, role: user.role }));
      localStorage.setItem('authToken', token);
      return token;
    }
    return null;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  // Get current user's role
  getRole(): string | null {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken = JSON.parse(atob(token));
      return decodedToken.role;
    }
    return null;
  }

  // Logout
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
