import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubgroupService } from '../shared/services/subgroup.service';

@Component({
  selector: 'app-subgroup-details',
  templateUrl: './subgroup-details.component.html',
  styleUrls: ['./subgroup-details.component.css'],
})
export class SubgroupDetailsComponent implements OnInit {
  subgroup: any = null;
  collectionId: any = null;
  groupId: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private subgroupService: SubgroupService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        this.collectionId = params.collection_id;
        this.groupId = params.group_id;
        const subgroupId = params.subgroup_id;

        this.subgroupService
          .fetchSubgroup(this.collectionId, this.groupId, subgroupId)
          .subscribe({
            next: (res: any) => {
              this.subgroup = res.payload.subgroup;
              console.log(this.subgroup);
            },
          });
      },
    });
  }

  onDeleteSubgroup() {
    this.subgroupService
      .deleteSubgroup(this.collectionId, this.groupId, this.subgroup.id)
      .subscribe({
        next: (res: any) => {
          this.route.navigate([
            '/collections',
            this.collectionId,
            this.groupId,
          ]);
        },
      });
  }

}
