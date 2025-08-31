import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments/environment.development';
import { LoggedinUser, User } from '../interfaces/user';
import { Credentials } from '../interfaces/auth';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

// back-end user route
const API_URL = `${environment.apiURL}/api/staff`;
const API_URL_AUTH = `${environment.apiURL}/api/auth`;



@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  router = inject(Router);

  user$ = signal<LoggedinUser | null>(null);

  constructor() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const decodedTokenSubject = jwtDecode(accessToken) as unknown as LoggedinUser;
      this.user$.set({
        username: decodedTokenSubject.username,
        email: decodedTokenSubject.email,
        roles: decodedTokenSubject.roles
      });
    };

    effect(() => {
      if (this.user$()) {
        console.log("User Logged In.", this.user$()?.username);
      } else {
        console.log("User Not Logged In.");
      };
    });
  };

  registerUser(user: User) {
    return this.http.post<{exists: boolean}>(`${API_URL}`, user);
  };

  checkDuplicateUsername(username: string) {
    return this.http.get<
    { exists: boolean }>(
      `${API_URL}/checkDuplicateUsername/${username}`
    );
  };

  checkDuplicateEmail(email: string) {
    return this.http.get<
    { exists: boolean }>(
      `${API_URL}/checkDuplicateEmail/${email}`
    );
  };

  loginUser(credentials: Credentials) {
    return this.http.post<{status:boolean, data: string}>(
      `${API_URL_AUTH}/login`, credentials
    );
  };

  logoutUser() {
    this.user$.set(null);
    localStorage.removeItem('accessToken');
    this.router.navigate(['login']);
  };

  isTokenExpired(): boolean {
    const token = localStorage.getItem('accessToken');
    if (!token) return true;

    try {
      const decoded = jwtDecode(token);
      const exp = decoded.exp;
      const now = Math.floor(Date.now()/1000);
      if (exp) {
      return exp < now;
      } else {
        return true;
      }
    } catch (err) {
      return true;
    };
  };

  redirectToGoogleLogin() {
    const clientId = "938411590576-5q123u9sdts3u3r3j0g1vboij96vd5n2.apps.googleusercontent.com";
    const redirectUri = 'http://localhost:3000/api/auth/google/callback';
    const scope = "email profile";
    const responseType = "code";
    const accessType = "offline";

    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}`;

    window.location.href = url;
  };
};