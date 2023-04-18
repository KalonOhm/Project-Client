import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NavComponent } from './shared/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { CollectionsComponent } from './collections/collections.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { SubgroupDetailsComponent } from './subgroup-details/subgroup-details.component';
import { MiniDetailsComponent } from './mini-details/mini-details.component';
import { CreateCollectionComponent } from './shared/modals/create-collection/create-collection.component';
import { EditCollectionComponent } from './shared/modals/edit-collection/edit-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    CollectionDetailComponent,
    CollectionsComponent,
    GroupDetailsComponent,
    SubgroupDetailsComponent,
    MiniDetailsComponent,
    CreateCollectionComponent,
    EditCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
