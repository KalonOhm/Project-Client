import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


const URL = "http://localhost:3000/api/v1/users";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    ) { }

  fetchCollections() {
    return this.http.get(`${URL}/collections/home`);
  }

  fetchAllCollections() {
    const token = this.authService.getToken();
    return this.http.get(`${URL}/collections`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  fetchCollection(id) {
    const token = this.authService.getToken();
    return this.http.get(`${URL}/collections/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }





}
