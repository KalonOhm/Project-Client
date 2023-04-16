import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css'],
})
export class CreateCollectionComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;

  errors = [];

  collectionFormGroup = new FormGroup({
    collection_name: new FormControl(''),
  });

  constructor(private collectionService: CollectionService) {}

  ngOnInit(): void {}

  onSubmit() {
    const newCollection = this.collectionFormGroup.value;

    this.collectionService.createCollection(newCollection).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();
        window.location.reload()
        this.collectionService.onAddCollection(res.payload.collection);
      },
      error: (err) => {
        this.errors = err.error.errors;
        console.log(err);
      }
    })
  }
}
