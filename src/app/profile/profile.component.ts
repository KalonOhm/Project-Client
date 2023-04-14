import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

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
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        const id = params.id;
        const token = this.authService.getToken();
        this.http.get(`http://localhost:3000/api/v1/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }).subscribe({
          next: (res: any) => {
            this.profileUser = res.payload.user;
            this.profileCollection = res.payload.user.collections;
          },
        });
      },
    });
  }
}
