import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/models/user.model';
import { UserService } from '../auth/user.service';
import { CollectionService } from '../shared/services/collection.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileCollections: any = null;
  profileUser: any = null;
  CurrentUser: User = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService,
    private collectionService: CollectionService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {

        // check to see if profileUser is the same as the current user
        // allos current collection state to alter component


        // Subscribe to the currentUserSubject to get the current user
        this.userService.currentUserSubject.subscribe({
          next: (loggedIn:User)=>{
            this.CurrentUser = loggedIn;
        }})
        // Get the user id from the url
        const id = params.id;
        // Get the token from the authService
        const token = this.authService.getToken();
        // Get the user from the backend
        this.http.get(`http://localhost:3000/api/v1/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }).subscribe({
          next: (res: any) => {
            this.profileUser = res.payload.user;
            this.profileCollections = res.payload.user.collections;

            if(this.CurrentUser.id === this.profileUser.id){
              this.collectionService.currentUserCollectionsS.subscribe({
                next: (curretUserCollections)=>{
                  this.profileCollections = curretUserCollections;
                }
              })
            }
          },
        });
      },
    });
  }
}
