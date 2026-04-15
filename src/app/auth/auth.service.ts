// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

export interface AdminUser {
  id: number;
  email: string;
  name: string;
}

export interface LoginResponse {
  token: string;
  admin: AdminUser;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(res => {
        localStorage.setItem('cf_token', res.token);
        localStorage.setItem('cf_admin', JSON.stringify(res.admin));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('cf_token');
    localStorage.removeItem('cf_admin');
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('cf_token');
  }

  getAdmin(): AdminUser | null {
    const data = localStorage.getItem('cf_admin');
    return data ? JSON.parse(data) : null;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  verifyToken(): Observable<{ admin: AdminUser }> {
    return this.http.get<{ admin: AdminUser }>(`${this.apiUrl}/me`);
  }
}
