import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SubgroupService } from '../../services/subgroup.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-subgroup',
  templateUrl: './create-subgroup.component.html',
  styleUrls: ['./create-subgroup.component.css']
})
export class CreateSubgroupComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;

  @Input() group: any = null;
  @Input() collectionId: any = null;

  errors = [];

  subgroupFormGroup = new FormGroup({
    subgroup_name: new FormControl(''),
  });

  constructor(private subgroupService: SubgroupService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newSubgroup = this.subgroupFormGroup.value;

    this.subgroupService.createSubgroup(this.collectionId, this.group.id, newSubgroup).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();
        this.subgroupService.onAddSubgroup(res.payload.subgroup);
        window.location.reload();
      },
      error: (err) => {
        this.errors = err.error.errors;
        console.log(err);
      },
    });
  }

}
