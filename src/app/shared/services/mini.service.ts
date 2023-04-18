import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const URL = 'http://localhost:3000/api/v1/users/collections';

@Injectable({
  providedIn: 'root',
})
export class MiniService {
  currentMinis: any = [];
  currentMinisSubject: Subject<any> = new Subject;
  detailMinisSubject: Subject<any> = new Subject;

  constructor(private http: HttpClient) {}

  fetchMinis(collection_id, group_id, subgroup_id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.get(
      `${URL}/${collection_id}/groups/${group_id}/subgroups/${subgroup_id}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
  }

  fetchMini(collection_id, group_id, subgroup_id, id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.get(
      `${URL}/${collection_id}/groups/${group_id}/subgroups/${subgroup_id}/minis/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
  }

  createMini(collection_id, group_id, subgroup_id, mini) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.post(
      `${URL}/${collection_id}/groups/${group_id}/subgroups/${subgroup_id}/minis`,
      mini,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
  }

  setMinis(minis) {
    this.currentMinis = minis;
    this.currentMinisSubject.next(minis);
  }

  onAddMini(mini) {
    this.setMinis([...this.currentMinis, mini]);
  }

  onEditMini(editedMini, collection_id, group_id, subgroup_id, id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.put(`${URL}/${collection_id}/groups/${group_id}/subgroups/${subgroup_id}/minis/${id}`, editedMini, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  editMini(editMini: any){
    this.detailMinisSubject.next(editMini);
    const index = this.currentMinis.findIndex((mini: any) => mini.id === editMini.id);
    this.currentMinis[index] = editMini;
    this.setMinis(this.currentMinis);
    //window.location.reload();
  }

  deleteMini(collection_id, group_id, subgroup_id, id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.delete(
      `${URL}/${collection_id}/groups/${group_id}/subgroups/${subgroup_id}/minis/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
  }
}
