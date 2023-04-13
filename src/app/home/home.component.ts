import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../shared/services/collection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  previewCollections: any = [];

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collectionService.fetchCollections().subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.success) {
          this.previewCollections = res.payload.preview;
          console.log(this.previewCollections)
        }
      }
    })
  }

}
