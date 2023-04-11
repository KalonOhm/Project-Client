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
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CollectionsComponent } from './collections/collections.component';
import { GroupsComponent } from './collections/groups/groups.component';
import { SubgroupsComponent } from './collections/groups/subgroups/subgroups.component';
import { MinisComponent } from './collections/groups/subgroups/minis/minis.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    SearchbarComponent,
    SidebarComponent,
    CollectionsComponent,
    GroupsComponent,
    SubgroupsComponent,
    MinisComponent
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
