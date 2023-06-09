import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { CollectionService } from '../shared/services/collection.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private route: Router,
    private userService: UserService,
    private collectionService: CollectionService
  ) {}

  signup(user) {
    return this.http.post('http://localhost:3000/api/v1/users/create', user);
  }

  login(user) {
    return this.http.post('http://localhost:3000/api/v1/users/login', user);
  }

  autoSignIn() {
    // get token from local storage
    const token = this.getToken();
    if (!token) {
      return;
    }
    // send request to server to verify token
    this.http
      .get('http://localhost:3000/api/v1/users/me', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .subscribe({
        next: (res: any) => {
          if (res.success) {
            // console.log(res.payload.user)
            this.userService.setCurrentUser(res.payload.user);
            this.collectionService.setCollections(res.payload.user.collections)
            // console.log(res);
            // navigate to home page
            // this.route.navigate(['/home'])
          }
        },
      });
  }

  logout() {
    const token = this.getToken();

    this.http
      .delete('http://localhost:3000/api/v1/users/logout', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .subscribe({
        next: (res: any) => {
          if (res.success) {
            this.removeToken();
            this.userService.setCurrentUser(null);
            this.route.navigate(['/login']);
          }
        },
      });
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }

  setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
