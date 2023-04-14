import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../shared/services/collection.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  allCollections = [];

  constructor(private collectionService: CollectionService) {}

  ngOnInit(): void {
    this.collectionService.fetchAllCollections().subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.success) {
          this.allCollections = res.payload.collections;
        }
      },
    });
  }
}
