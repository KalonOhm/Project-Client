import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @Input() group: any = null;

  groupFormGroup: FormGroup;
  errors = [];

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groupFormGroup = new FormGroup({
      group_name: new FormControl(this.group.group_name),
    });
  }

  onSubmit() {
    const editedGroup = this.groupFormGroup.value;

    this.groupService.onEditGroup(editedGroup, this.group.collection_id, this.group.id).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();
        this.groupService.editGroup(res.payload.group);
      }
    });
  }
}
