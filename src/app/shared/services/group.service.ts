import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CollectionService } from './collection.service';

const URL = "http://localhost:3000/api/v1/users/collections";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  // currentCollectionId: any = null;
  currentGroups: any = []
  currentGroupsSubject: Subject<any> = new Subject;
  detailGroupsSubject: Subject<any> = new Subject;

  constructor(
    private http: HttpClient
    // private collectionService: CollectionService
  ) { }

  fetchGroups(collection_id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.get(`${URL}/${collection_id}/groups`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  fetchGroup(collection_id, id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.get(`${URL}/${collection_id}/groups/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }
}
