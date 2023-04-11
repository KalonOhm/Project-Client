import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CollectionsComponent } from './collections/collections.component';
import { GroupsComponent } from './collections/groups/groups.component';
import { MinisComponent } from './collections/groups/subgroups/minis/minis.component';
import { SubgroupsComponent } from './collections/groups/subgroups/subgroups.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'collections',
    component: CollectionsComponent
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'subgroups',
    component: SubgroupsComponent
  },
  {
    path: 'minis',
    component: MinisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
