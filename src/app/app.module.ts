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
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { ResidenceComponent } from './residence/residence.component';
import { ResidenceService } from './core/services/residence.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListResidenceComponent,
    UsersComponent,
    DetailsUserComponent,
    NotFoundComponent,
    FormResidenceComponent,
    FormAppartementComponent,
    ResidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
