import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/authguard.service';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //ng generate module orders --route orders --module app.module //Whoa
  { path: 'home', canActivate: [AuthGuardService], loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
