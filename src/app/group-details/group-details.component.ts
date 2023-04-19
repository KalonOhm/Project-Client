import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css'],
})
export class GroupDetailsComponent implements OnInit {
  group: any = null;
  collectionId: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private groupService: GroupService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        this.collectionId = params.collection_id;
        const groupId = params.group_id;

        this.groupService.fetchGroup(this.collectionId, groupId).subscribe({
          next: (res: any) => {
            this.group = res.payload.group;
            console.log(this.group);
          },
        });
      },
    });
  }

  onDeleteGroup() {
    this.groupService.deleteGroup(this.collectionId, this.group.id).subscribe({
      next: (res: any) => {
        this.route.navigate(['/collections', this.collectionId]);
      },
    });
  }
}
