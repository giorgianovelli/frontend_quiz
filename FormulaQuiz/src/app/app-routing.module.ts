import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardLayoutComponent} from './layouts/dashboard-layout/dashboard-layout.component';
import {DashboardModule} from './dashboard/dashboard.module';


const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    loadChildren: () => DashboardModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
