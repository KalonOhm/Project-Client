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

  createGroup(collection_id, group) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.post(`${URL}/${collection_id}/groups`, group, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  setGroups(groups){
    this.currentGroups = groups;
    this.currentGroupsSubject.next(groups)
  }

  onAddGroup(group){
    this.setGroups([...this.currentGroups, group]);
  }

  onEditGroup(editedGroup, collection_id, id){
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.put(`${URL}/${collection_id}/${id}`, editedGroup, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  editGroup(editGroup: any) {
    this.detailGroupsSubject.next(editGroup);
    const index = this.currentGroups.findIndex((group: any) => group.id === editGroup.id);
    this.currentGroups[index] = editGroup;
    this.setGroups(this.currentGroups);
    //window.location.reload();
  }

  deleteGroup(collection_id, id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.delete(`${URL}/${collection_id}/groups/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }





}
