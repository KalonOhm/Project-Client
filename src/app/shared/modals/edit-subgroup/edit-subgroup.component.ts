import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubgroupService } from '../../services/subgroup.service';

@Component({
  selector: 'app-edit-subgroup',
  templateUrl: './edit-subgroup.component.html',
  styleUrls: ['./edit-subgroup.component.css']
})
export class EditSubgroupComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @Input() subgroup: any = null;

  subgroupFormGroup: FormGroup;
  errors = [];

  constructor(private subgroupService: SubgroupService) { }

  ngOnInit(): void {
    this.subgroupFormGroup = new FormGroup({
      subgroup_name: new FormControl(this.subgroup.subgroup_name),
    });
  }

  onSubmit() {
    const editedSubgroup = this.subgroupFormGroup.value;

    this.subgroupService.onEditSubgroup(editedSubgroup, this.subgroup.collection_id, this.subgroup.group_id, this.subgroup.id).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();
        this.subgroupService.editSubgroup(res.payload.subgroup);
      }
    });
  }
}
