import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManageComponent } from './manage/manage.component';
import { ManageNVComponent } from './manage-nv/manage-nv.component';
import { PlusComponent } from './plus/plus.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: { breadcrumb: 'Dashboard' },
    },
    {
      path: 'manage',
      component: ManageComponent,
      data: { breadcrumb: 'Manage' }
    },
    {
      path: 'manage-nv',
      component: ManageNVComponent,
      data: { breadcrumb: 'Manage-nv' }
    },
    {
      path: 'plus',
      component: PlusComponent,
      data: { breadcrumb: 'Plus' }
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
