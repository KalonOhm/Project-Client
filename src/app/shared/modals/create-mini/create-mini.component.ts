import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MiniService } from '../../services/mini.service';

@Component({
  selector: 'app-create-mini',
  templateUrl: './create-mini.component.html',
  styleUrls: ['./create-mini.component.css']
})
export class CreateMiniComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;

  @Input() subgroup: any = null;
  @Input() groupId: any = null;
  @Input() collectionId: any = null;

  errors = [];

  miniFormGroup = new FormGroup({
    mini_name: new FormControl(''),
    image: new FormControl(''),
    loadout: new FormControl(''),
    quantity: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private miniService: MiniService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    const newMini = this.miniFormGroup.value;

    this.miniService.createMini(this.collectionId, this.groupId, this.subgroup.id, newMini).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();
        this.miniService.onAddMini(res.payload.mini);
        window.location.reload();
      },
      error: (err) => {
        this.errors = err.error.errors;
        console.log(err);
      },
    });
  }
}
