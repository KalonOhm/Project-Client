import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "http://localhost:3000/api/v1/users/collections";

@Injectable({
  providedIn: 'root'
})
export class SubgroupService {


  constructor(
    private http: HttpClient
  ) { }

  fetchSubgroups(collection_id, group_id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.get(`${URL}/${collection_id}/groups/${group_id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  fetchSubgroup(collection_id, group_id, id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.get(`${URL}/${collection_id}/groups/${group_id}/subgroups/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }
}
