import { Component, OnInit } from '@angular/core';
import { MiniService } from '../shared/services/mini.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-minis',
  templateUrl: './minis.component.html',
  styleUrls: ['./minis.component.css']
})
export class MinisComponent implements OnInit {
  mini: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private miniService: MiniService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        const collectionId = params.collection_id;
        const groupId = params.group_id;
        const subgroupId = params.subgroup_id;
        const miniId = params.mini_id;
        console.log(collectionId);

        this.miniService
          .fetchMini(collectionId, groupId, subgroupId, miniId)
          .subscribe({
            next: (res: any) => {
              this.mini = res.payload.mini;
              console.log(this.mini);
            },
          });
      },
    });
  }
}
