import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [
    AuthService,
  ]
})
export class CoreModule { }
