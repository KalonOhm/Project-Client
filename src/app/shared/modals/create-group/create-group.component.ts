import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css'],
})
export class CreateGroupComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;

  @Input() collectionId: any = null;

  errors = [];

  groupFormGroup = new FormGroup({
    group_name: new FormControl(''),
  });

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {}

  onSubmit() {
    const newGroup = this.groupFormGroup.value;

    this.groupService.createGroup(this.collectionId, newGroup).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();
        window.location.reload();
        this.groupService.onAddGroup(res.payload.group);
      },
      error: (err) => {
        this.errors = err.error.errors;
        console.log(err);
      },
    });
  }
}
