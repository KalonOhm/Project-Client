import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubgroupService } from '../shared/services/subgroup.service';

@Component({
  selector: 'app-subgroup-details',
  templateUrl: './subgroup-details.component.html',
  styleUrls: ['./subgroup-details.component.css'],
})
export class SubgroupDetailsComponent implements OnInit {
  subgroup: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private subgroupService: SubgroupService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        const collectionId = params.collection_id;
        const groupId = params.group_id;
        const subgroupId = params.subgroup_id;

        this.subgroupService
          .fetchSubgroup(collectionId, groupId, subgroupId)
          .subscribe({
            next: (res: any) => {
              this.subgroup = res.payload.subgroup;
              console.log(this.subgroup);
            },
          });
      },
    });
  }
}
