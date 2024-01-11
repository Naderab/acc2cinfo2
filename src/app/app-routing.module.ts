import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListResidenceComponent } from './list-residence/list-residence.component';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'listResidence', component: ListResidenceComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:name', component: DetailsUserComponent },
  { path: '', redirectTo: '/listResidence', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
