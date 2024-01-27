import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListResidenceComponent } from './list-residence/list-residence.component';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';

const routes: Routes = [
  { path: 'listResidence', component: ListResidenceComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:name', component: DetailsUserComponent },
  { path: '', redirectTo: '/listResidence', pathMatch: 'full' },
  { path: 'formResidence', component: FormResidenceComponent },
  {path:'updateResidence/:id',component:FormResidenceComponent},
  { path: 'formAppartement', component: FormAppartementComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
