import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) { }

  login(username: string) {
    const url = `${environment.apiUrl}/Usuarios/${username}/.json`;

    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
    };

    return this.http.get(
      url,
      {
        headers,
      }
    );
  }
}