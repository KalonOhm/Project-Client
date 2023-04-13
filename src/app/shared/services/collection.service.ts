import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const URL = "http://localhost:3000/api/v1/users";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient) { }

  fetchCollections() {
    return this.http.get(`${URL}/collections/home`);
  }

  fetchCollection(id) {
    return this.http.get(`${URL}/collections/${id}`);
  }
}
