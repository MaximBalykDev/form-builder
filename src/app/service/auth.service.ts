import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { IToken, IUser } from '../data/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(user: IUser): Observable<IToken> {
    return this.http.post<IToken>(this.registerUrl, user);
  }

  loginUser(user: IUser): Observable<IToken> {
    return this.http.post<IToken>(this.loginUrl, user);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logoutUser(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
