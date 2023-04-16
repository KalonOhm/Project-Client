import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const URL = "http://localhost:3000/api/v1/users/collections";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  currentCollectionId: any = null;
  currentCollectionGroups: any = []
  currentCollectionGroupsSubject: Subject<any> = new Subject;
  detailCollectionGroupsSubject: Subject<any> = new Subject;

  constructor(
    private http: HttpClient,
  ) { }

  fetchGroups() {
    const token = JSON.parse(localStorage.getItem('token'));//this.authService.getToken();
    return this.http.get(`${URL}/${this.currentCollectionId}/groups`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  fetchGroup(id) {
    const token = JSON.parse(localStorage.getItem('token'));//this.authService.getToken();
    return this.http.get(`${URL}/${this.currentCollectionId}/groups/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  createGroup(group) {
    const token = JSON.parse(localStorage.getItem('token'));//this.authService.getToken();
    return this.http.post(`${URL}/${this.currentCollectionId}/groups`, group, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  setGroups(groups){
    this.currentCollectionGroups = groups;
    this.currentCollectionGroupsSubject.next(groups)
  }

  onAddGroup(group){
    this.setGroups([...this.currentCollectionGroups, group]);
  }

  onEditGroup(editedGroup, id){
    const token = JSON.parse(localStorage.getItem('token'));//this.authService.getToken();
    return this.http.put(`${URL}/${this.currentCollectionId}/groups/${id}`, editedGroup, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  editGroup(editGroup: any){
    this.detailCollectionGroupsSubject.next(editGroup);
    const index = this.currentCollectionGroups.findIndex((group: any) => group.id === editGroup.id);
    this.currentCollectionGroups[index] = editGroup;
    this.setGroups(this.currentCollectionGroups);
    //window.location.reload();
  }

  deleteGroup(id){
    const token = JSON.parse(localStorage.getItem('token'));//this.authService.getToken();
    return this.http.delete(`${URL}/${this.currentCollectionId}/groups/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

}
