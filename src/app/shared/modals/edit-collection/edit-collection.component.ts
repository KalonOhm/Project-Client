import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.css']
})
export class EditCollectionComponent implements OnInit{
  @ViewChild('closeBtn') closeBtn: ElementRef;

  @Input() collection: any = null;

  collectionFormGroup: FormGroup;
  errors = [];

  constructor(private collectionService: CollectionService) {}

  ngOnInit(): void {
    this.collectionFormGroup = new FormGroup({
      collection_name: new FormControl(this.collection.collection_name),
    });
  }

  onSubmit() {
    const editedCollection = this.collectionFormGroup.value;
    
    this.collectionService.onEditCollection(editedCollection, this.collection.id).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();
        this.collectionService.editCollection(res.payload.collection);
      }
    });
  }
}
