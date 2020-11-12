import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './store/reducers/login.reducer';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducer)
  ]
})
export class LoginModule { }
