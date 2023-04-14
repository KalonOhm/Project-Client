import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../shared/services/collection.service';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css'],
})
export class CollectionDetailComponent implements OnInit {

  collection: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        const collectionId = params.id;
        this.collectionService.fetchCollection(collectionId).subscribe({
          next: (res: any) => {
            this.collection = res.payload.collection;
          },
        });
      },
    });
  }
}
