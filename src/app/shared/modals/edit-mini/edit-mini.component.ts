import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MiniService } from '../../services/mini.service';

@Component({
  selector: 'app-edit-mini',
  templateUrl: './edit-mini.component.html',
  styleUrls: ['./edit-mini.component.css']
})
export class EditMiniComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;

  @Input() mini: any = null;
  @Input() subgroupId: any = null;
  @Input() groupId: any = null;
  @Input() collectionId: any = null;

  miniFormGroup: FormGroup;
  errors = [];

  constructor(private miniService: MiniService) { }

  ngOnInit(): void {
    this.miniFormGroup = new FormGroup({
      mini_name: new FormControl(this.mini.mini_name),
      loadout: new FormControl(this.mini.loadout),
      description: new FormControl(this.mini.description),
      image: new FormControl(this.mini.image),
      quantity: new FormControl(this.mini.quantity),
    });
  }

  onSubmit() {
    const editedMini = this.miniFormGroup.value;

    this.miniService.onEditMini(editedMini, this.collectionId, this.groupId, this.subgroupId, this.mini.id).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();
        this.miniService.editMini(res.payload.mini);
      }
    });
  }
}
