import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListResidenceComponent } from './list-residence/list-residence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListResidenceComponent,
    UsersComponent,
    DetailsUserComponent,
    NotFoundComponent,
    FormResidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
