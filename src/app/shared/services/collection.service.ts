import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const URL = "http://localhost:3000/api/v1/users";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  currentUserCollections: any = []
  currentUserCollectionsS: Subject<any> = new Subject;
  detailCollectionSubject: Subject<any> = new Subject;
  constructor(
    private http: HttpClient
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

  onAddCollection(collection){
    this.setCollections([...this.currentUserCollections, collection]);
  }

  onEditCollection(editedCollection, id){
    const token = JSON.parse(localStorage.getItem('token'));//this.authService.getToken();
    return this.http.put(`${URL}/collections/${id}`, editedCollection, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      }
    })
  }

  editCollection(editCollection: any) {
    this.detailCollectionSubject.next(editCollection);
    const index = this.currentUserCollections.findIndex((collection) => collection.id === editCollection.id);
    this.currentUserCollections[index] = editCollection;
    this.setCollections(this.currentUserCollections);
    // window.location.reload();
  }

  deleteCollection(id) {
    const token = JSON.parse(localStorage.getItem('token'));//this.authService.getToken();
    return this.http.delete(`${URL}/collections/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

}
