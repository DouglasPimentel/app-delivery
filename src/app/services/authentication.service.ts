import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationClient } from '../client/authentication.client';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token = 'token';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router 
  ) { }

  login(username: string, password: string): boolean {
    let token = this.token;
    let router = this.router;

    this.authenticationClient.login(username)?.subscribe({
      next: (value: any) => {
        if (value.Username === username && value.Password === password) {
          sessionStorage.setItem(token, JSON.stringify(value));
          router.navigate(['/']);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });

    return false;
  }

  isLoggedIn(): boolean {
    let token = sessionStorage.getItem(this.token);

    return token !== null && token.length > 0;
  }

  getToken(): string | null {
    return this.isLoggedIn() ? window.sessionStorage.getItem(this.token) : null;
  }

  logoutSession() {
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }
}
