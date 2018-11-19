import { ToolingListComponent } from './tooling/tooling-list/tooling-list.component';
import { ToolingAddComponent } from './tooling/tooling-add/tooling-add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tooling-add', component: ToolingAddComponent },
  { path: 'tooling-list', component: ToolingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
