import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const URL = "http://localhost:3000/api/v1/users";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  currentCollectionGroups: any = []
  currentCollectionGroupsSubject: Subject<any> = new Subject;
  detailCollectionGroupsSubject: Subject<any> = new Subject;

  constructor(
    private http: HttpClient,
  ) { }

  fetchGroups() {
    const token = JSON.parse(localStorage.getItem('token'));//this.authService.getToken();
    return this.http.get(`${URL}/groups`, {);
  }

}
