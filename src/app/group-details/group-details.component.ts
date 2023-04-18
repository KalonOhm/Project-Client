import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from '../shared/services/collection.service';
import { UserService } from '../auth/user.service';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css'],
})
export class GroupDetailsComponent implements OnInit {
  group: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private groupService: GroupService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        const collectionId = params.collection_id;
        const groupId = params.group_id;
        console.log(collectionId);

        this.groupService.fetchGroup(collectionId, groupId).subscribe({
          next: (res: any) => {
            this.group = res.payload.group;
            console.log(this.group);
          },
        });
      },
    });
  }
}
