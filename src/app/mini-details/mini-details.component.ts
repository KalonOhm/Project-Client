import { Component, OnInit } from '@angular/core';
import { MiniService } from '../shared/services/mini.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mini-details',
  templateUrl: './mini-details.component.html',
  styleUrls: ['./mini-details.component.css'],
})
export class MiniDetailsComponent implements OnInit {
  mini: any = null;
  subgroupId: any = null;
  groupId: any = null;
  collectionId: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private miniService: MiniService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        this.collectionId = params.collection_id;
        this.groupId = params.group_id;
        this.subgroupId = params.subgroup_id;
        const miniId = params.mini_id;

        this.miniService
          .fetchMini(this.collectionId, this.groupId, this.subgroupId, miniId)
          .subscribe({
            next: (res: any) => {
              this.mini = res.payload.mini;
              console.log(this.mini);
            },
          });
      },
    });
  }

  onDeleteMini() {
    this.miniService
      .deleteMini(
        this.collectionId,
        this.groupId,
        this.subgroupId,
        this.mini.id
      )
      .subscribe({
        next: (res: any) => {
          this.route.navigate([
            '/collections',
            this.collectionId,
            this.groupId,
            this.subgroupId,
          ]);
        },
      });
  }
}
