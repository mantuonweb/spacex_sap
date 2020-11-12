import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: LaunchDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
