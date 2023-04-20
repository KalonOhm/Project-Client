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

  @Input() collection: any = null;

  errors = [];

  groupFormGroup = new FormGroup({
    group_name: new FormControl(''),
  });

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {}

  onSubmit() {
    const newGroup = this.groupFormGroup.value;

    this.groupService.createGroup(this.collection.id, newGroup).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();
        this.groupService.onAddGroup(res.payload.group);
        window.location.reload();
      },
      error: (err) => {
        this.errors = err.error.errors;
        console.log(err);
      },
    });
  }
}
