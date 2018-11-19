import { ToolingListComponent } from './tooling-list/tooling-list.component';
import { ToolingAddComponent } from './tooling-add/tooling-add.component';
import { ToolingComponent } from './tooling.component';
import { SharedModule } from './../shared/shared.module';
import { ToolingRoutingModule } from './tooling-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ToolingComponent,
    ToolingAddComponent,
    ToolingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToolingRoutingModule,
    SharedModule
  ]
})
export class ToolingModule { }
