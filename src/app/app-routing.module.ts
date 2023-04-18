import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionsComponent } from './collections/collections.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { SubgroupDetailsComponent } from './subgroup-details/subgroup-details.component';
import { MiniDetailsComponent } from './mini-details/mini-details.component';

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
    path: 'collections/:id',
    component: CollectionDetailComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path: 'collections/:collection_id/:group_id',
    component: GroupDetailsComponent
  },
  {
    path: 'collections/:collection_id/:group_id/:subgroup_id',
    component: SubgroupDetailsComponent
  },
  {
    path: 'collections/:collection_id/:group_id/:subgroup_id/:mini_id',
    component: MiniDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
