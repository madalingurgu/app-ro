import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule,
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
  ]
})
export class AuthModule { }