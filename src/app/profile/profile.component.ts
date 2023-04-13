import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileCollection: any = null;
  profileUser: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        const id = params.id;
        this.http.get(`http://localhost:3000/api/v1/users/${id}`).subscribe({
          next: (res: any) => {
            this.profileUser = res.payload.user;
            this.profileCollection = res.payload.user.collections;
          },
        });
      },
    });
  }
}
