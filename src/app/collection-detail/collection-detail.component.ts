import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from '../shared/services/collection.service';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css'],
})
export class CollectionDetailComponent implements OnInit {
  collection: any = null;
  currentUser: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionService,
    private userService: UserService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.collectionService.detailCollectionSubject.subscribe({
      next: (editedCollection: any) => {
        this.collection = editedCollection;
      },
    });
    this.userService.currentUserSubject.subscribe({
      next: (currentUser: any) => {
        this.currentUser = currentUser;
      },
    });

    this.activatedRoute.params.subscribe({
      next: (params) => {
        const collectionId = params.id;
        this.collectionService.fetchCollection(collectionId).subscribe({
          next: (res: any) => {
            console.log(res);
            this.collection = res.payload.collection;
          },
        });
      },
    });
  }

  onDeleteCollection() {
    this.collectionService.deleteCollection(this.collection.id).subscribe({
      next: (res: any) => {
        this.route.navigate(['/collections']);
      },
    });
  }
}
