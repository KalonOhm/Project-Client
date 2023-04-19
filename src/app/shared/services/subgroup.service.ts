import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const URL = "http://localhost:3000/api/v1/users/collections";

@Injectable({
  providedIn: 'root'
})
export class SubgroupService {
  currentSubgroups: any = []
  currentSubgroupsSubject: Subject<any> = new Subject;
  detailSubgroupsSubject: Subject<any> = new Subject;

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

  createSubgroup(collection_id, group_id, subgroup) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.post(`${URL}/${collection_id}/groups/${group_id}/subgroups`, subgroup, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  setSubgroups(subgroups){
    this.currentSubgroups = subgroups;
    this.currentSubgroupsSubject.next(subgroups)
  }

  onAddSubgroup(subgroup){
    this.setSubgroups([...this.currentSubgroups, subgroup]);
  }

  onEditSubgroup(editedSubgroup, collection_id, group_id, id){
    console.log(editedSubgroup, collection_id, group_id, id)
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.put(`${URL}/${collection_id}/groups/${group_id}/subgroups/${id}`, editedSubgroup, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  editSubgroup(editSubgroup: any) {
    this.detailSubgroupsSubject.next(editSubgroup);
    const index = this.currentSubgroups.findIndex((subgroup: any) => subgroup.id === editSubgroup.id);
    this.currentSubgroups[index] = editSubgroup;
    this.setSubgroups(this.currentSubgroups);
    window.location.reload();
  }

  deleteSubgroup(collection_id, group_id, id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.delete(`${URL}/${collection_id}/groups/${group_id}/subgroups/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }



}
