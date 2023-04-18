import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiniService {

  constructor(
    private http: HttpClient
  ) { }

  fetchMinis(collection_id, group_id, subgroup_id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.get(`${URL}/${collection_id}/groups/${group_id}/subgroups/${subgroup_id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  fetchMini(collection_id, group_id, subgroup_id, id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.get(`${URL}/${collection_id}/groups/${group_id}/subgroups/${subgroup_id}/minis/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }
}
