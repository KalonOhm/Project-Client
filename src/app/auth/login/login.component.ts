import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { CollectionService } from 'src/app/shared/services/collection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: Router,
    private collectionService: CollectionService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.loginForm.value);
    const loginUser = this.loginForm.value;

    this.authService.login(loginUser).subscribe({
      next: (res: any) => {
        // console.log(res);
        if (res.success) {
          this.userService.setCurrentUser(res.payload.user);
          this.collectionService.setCollections(res.payload.user.collections);
          this.route.navigate(['/home']);
          this.authService.setToken(res.payload.token);
          // console.log(res);
        }
      },
    });
  }
}
