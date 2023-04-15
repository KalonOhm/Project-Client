import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


const URL = "http://localhost:3000/api/v1/users";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  currentUserCollections: any = []
  currentUserCollectionsS: Subject<any> = new Subject;
  constructor(
    private http: HttpClient,
    // private authService: AuthService,
    ) { }

  fetchCollections() {
    return this.http.get(`${URL}/collections/home`);
  }

  fetchAllCollections() {
    const token = JSON.parse(localStorage.getItem('token'));//this.authService.getToken();
    return this.http.get(`${URL}/collections`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  fetchCollection(id) {
    const token = JSON.parse(localStorage.getItem('token'));//this.authService.getToken();
    return this.http.get(`${URL}/collections/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  createCollection(collection) {
    const token = JSON.parse(localStorage.getItem('token'));//this.authService.getToken();
    return this.http.post(`${URL}/collections`, collection, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  setCollections(collections){
    this.currentUserCollections = collections;
    this.currentUserCollectionsS.next(collections)
  }

}
